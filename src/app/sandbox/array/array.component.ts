import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator,
  Validators,
} from '@angular/forms';
import { BehaviorSubject, Subscription, tap } from 'rxjs';
import { Column, FormControlType, FormCustomEvent } from '../types/types.def';

@Component({
  selector: 'app-array[event][cols]',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: ArrayComponent,
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: ArrayComponent,
      multi: true,
    },
  ],
})
export class ArrayComponent
  implements OnDestroy, ControlValueAccessor, Validator, OnChanges
{

  @Input()
  public event: FormCustomEvent;
  @Input()
  public cols: Column[] = [];

  form: FormGroup = this._fb.group({
    array: this._fb.array([]),
  });

  array!: FormArray;
  dataSource = new BehaviorSubject<AbstractControl[]>([]);
  formChange: Subscription;
  onTouched: Function = () => {
  };
  onValidatorChange: Function = () => {
    console.log('onValidatorChange')
  };
  data = [];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','actions'];

  constructor(private _fb: FormBuilder) {}


  /**
   * Ecouteur de changement d'event.
   */
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.event?.currentValue) {
        let { event , data } = changes.event.currentValue;
        console.warn(`ArrayComponent - Received ${event} with data : ${data ? data : 'no values'}`);
        switch (event) {
          case 'date': {
            this.array.clear();
            this.updateView();
          }
        }
    }
  }

  //*********** Validator ***********//

  /*
  * Validation custom du formulaire
  */
  validate(control: AbstractControl<any, any>): ValidationErrors {
    if(this.array.value.length === 0){
      return { empty: true };
    }
    return this.form.valid ? null : { invalid: true };
  }

  /*
  * branchement de la callback de validation du formulaire
  */
  registerOnValidatorChange?(onValidatorChange: () => void): void {
    this.onValidatorChange = onValidatorChange;
  }

  /** ControlValueAccessor */
  writeValue(obj: any): void {
    if (obj) {
      obj.forEach((element) => {
        this.addObjToArray(element);
      });
    }
  }

  registerOnChange(fn: any): void {
    this.formChange = this.form.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    if (isDisabled) {
      this.form.disable();
    } else {
      this.form.enable();
    }
  }

  /**
   * Ajout d'une nouvelle ligne au tableau de données
   */
  addToTab() {
    this.addObjToArray({
      position: null,
      name: null,
      weight: null,
      symbol: null,
    });
  }

  /**
   * Ajout d'un formulaire à l'array & mise à jour de la vue
   * @param obj donnée d'une ligne de formulaire
   */
  addObjToArray(obj: any) {
    this.array = this.form.get('array') as FormArray;
    this.array.push(this.createRow(obj));
    this.updateView();
  }

  /**
   * Suppression d'une ligne du tableau de formulaires
   * @param index index de la ligne à supprimer
   */
  remove(index: number) {
    this.array.removeAt(index);
    this.updateView();
  }

  /**
   * Création d'une ligne de formulaire
   * @param obj donnée d'une ligne de formulaire
   * @returns 
   */
  createRow(obj: any): FormGroup {
    let group = this._fb.group({});
    this.cols.forEach((col) => {
      let control = new FormControl(obj[col.name], {validators : col.validators});
      if(col.isDisabled){
        control.disable();
      }
      group.addControl(col.name, control);
    });
    
    return group;
  }

  /**
   * Mise à jour de la vue
   */
  updateView() : void  {
    this.form.markAllAsTouched();
    this.dataSource.next(this.array.controls);
  }

  /**
   * Ajoute une colonne à toutes les lignes du tableau de formulaire.
   * @returns 
   */
  addColumn(): void {
    if(this.displayedColumns.includes('added')){
      alert('Column already added');
      return;
    }
    this.cols.push({
      name : 'added',
      label : 'Added',
      type : FormControlType.TEXT,
      isDisabled : false,
    });  
    let values = this.array.value;
    this.array.clear();
    values.forEach((element) => {
      this.addObjToArray(element);
    })
    this.updateView();
    this.displayedColumns.push('added');
  }

  ngOnDestroy(): void {
    this.formChange.unsubscribe();
  }
}
