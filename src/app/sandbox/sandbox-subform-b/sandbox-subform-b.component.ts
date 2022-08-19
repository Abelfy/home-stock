import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  ControlValueAccessor,
  FormBuilder,
  FormGroup,
  NG_VALUE_ACCESSOR,
  Validators,
} from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sandbox-subform-b',
  templateUrl: './sandbox-subform-b.component.html',
  styleUrls: ['./sandbox-subform-b.component.scss'],
  providers : [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting : SandboxSubformBComponent,
      multi: true
    }
  ]
})
export class SandboxSubformBComponent
  implements ControlValueAccessor, OnDestroy
{
  onTouched = () => {};

  onChangeSub: Subscription;
  form: FormGroup = this._fb.group({
    addressLine1: [null, [Validators.required]],
    addressLine2: [null, [Validators.required]],
    zipCode: [null, [Validators.required]],
    city: [null, [Validators.required]],
  });

  constructor(private _fb: FormBuilder) {}

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
