import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormBuilder, FormGroup, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sandbox-subform-a',
  templateUrl: './sandbox-subform-a.component.html',
  styleUrls: ['./sandbox-subform-a.component.scss'],
  providers : [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting : SandboxSubformAComponent,
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: SandboxSubformAComponent,
      multi: true,
    },
  ]
})
export class SandboxSubformAComponent implements ControlValueAccessor, OnDestroy, Validator
{

  onTouched = () => {};
  onValidatorChange: Function = () => {};
  onChangeSub: Subscription;
  form: FormGroup = this._fb.group({
    date: [new Date(), [Validators.required]],
    addressLine2: [null, [Validators.required]],
    zipCode: [null, [Validators.required]],
    city: [null, [Validators.required]],
    resetWeight: [false, [Validators.required]],
  });
  
  constructor(private _fb: FormBuilder) {}
  
  validate(control: AbstractControl<any, any>): ValidationErrors {
    return this.form.errors;
  }

  registerOnValidatorChange?(fn: () => void): void {
    this.onValidatorChange = fn;
  }

  writeValue(value: any): void {
    if (value) {
      this.form.setValue(value);
    }
  }

  registerOnTouched(onTouched: any) {
    this.onTouched = onTouched;
  }
  registerOnChange(onChange: any): void {
    this.onChangeSub = this.form.valueChanges.subscribe(onChange);
  }

  setDisabledState?(isDisabled: boolean): void {
    if (isDisabled) {
      this.form.disable();
    } else {
      this.form.enable();
    }
  }

  ngOnDestroy(): void {
    this.onChangeSub.unsubscribe();
  }
}