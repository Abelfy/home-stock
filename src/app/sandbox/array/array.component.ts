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
  FormGroup,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator,
  Validators,
} from '@angular/forms';
import { BehaviorSubject, Subscription, tap } from 'rxjs';
import { FormCustomEvent } from '../types';

@Component({
  selector: 'app-array',
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
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  @Input()
  public event: FormCustomEvent;

  constructor(private _fb: FormBuilder) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.event?.currentValue) {
        let { name , data } = changes.event.currentValue;
        console.log(`Received ${name} with date : ${data}`);
        switch (name) {
          case 'date': {
            this.array.clear();
            
          }
        }
    }
  }

  validate(control: AbstractControl<any, any>): ValidationErrors {
    return this.form.valid ? null : { invalid: true };
  }

  registerOnValidatorChange?(onValidatorChange: () => void): void {
    this.onValidatorChange = onValidatorChange;
  }

  writeValue(obj: any): void {
    if (obj) {
      obj.forEach((element) => {
        this.addObjToArray(element);
      });
    }
  }

  addToTab() {
    this.addObjToArray({
      position: null,
      name: null,
      weight: null,
      symbol: null,
    });
  }

  addObjToArray(obj: any) {
    this.array = this.form.get('array') as FormArray;
    this.array.push(this.createRow(obj));
    this.updateView();
  }

  remove(index: number) {
    this.array.removeAt(index);
    this.updateView();
  }

  createRow(obj: any): FormGroup {
    return this._fb.group({
      position: [obj.position, Validators.required],
      name: [obj.name, Validators.required],
      weight: [obj.weight, Validators.required],
      symbol: [obj.symbol, Validators.required],
    });
  }

  updateView() {
    this.form.markAllAsTouched();
    this.dataSource.next(this.array.controls);
  }

  registerOnChange(fn: any): void {
    this.formChange = this.form.valueChanges
       .pipe(
        tap((value) => {
          this.updateView();
        })
      )
      .subscribe(fn());
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

  ngOnDestroy(): void {
    this.formChange.unsubscribe();
  }
}
