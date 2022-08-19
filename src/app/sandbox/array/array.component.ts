import { Component, OnDestroy } from '@angular/core';
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
  implements OnDestroy, ControlValueAccessor, Validator
{
  form: FormGroup = this._fb.group({
    array: this._fb.array([]),
  });

  array!: FormArray;
  dataSource = new BehaviorSubject<AbstractControl[]>([]);
  formChange: Subscription;
  onTouched: Function = () => {};
  onValidatorChange: Function = () => {};
  data = [];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  constructor(private _fb: FormBuilder) {}

  validate(control: AbstractControl<any, any>): ValidationErrors {
    return null;
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

  createRow(obj: any): FormGroup {
    return this._fb.group({
      position: [obj.position, Validators.required],
      name: [obj.name, Validators.required],
      weight: [obj.weight, Validators.required],
      symbol: [obj.symbol, Validators.required],
    });
  }

  updateView() {
    this.dataSource.next(this.array.controls);
  }

  registerOnChange(fn: any): void {
    this.validate(this.form);
    this.formChange = this.form.valueChanges
      .pipe(
        tap((value) => {
          fn();
          console.log('Form changed', value);
        })
      )
      .subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    this.form.markAllAsTouched();
    this.onTouched = fn;
  }
  
  setDisabledState?(isDisabled: boolean): void {
    if (isDisabled) {
      this.array.controls.forEach((control) => control.disable());
    } else {
      this.array.controls.forEach((control) => control.enable());
    }
  }

  ngOnDestroy(): void {
    this.formChange.unsubscribe();
  }
}
