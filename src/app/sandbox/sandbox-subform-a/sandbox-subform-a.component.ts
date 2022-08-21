import {
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormBuilder,
  FormGroup,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator,
  Validators,
} from '@angular/forms';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';
import { Subscription, tap } from 'rxjs';

@Component({
  selector: 'app-sandbox-subform-a',
  templateUrl: './sandbox-subform-a.component.html',
  styleUrls: ['./sandbox-subform-a.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: SandboxSubformAComponent,
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: SandboxSubformAComponent,
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SandboxSubformAComponent
  implements ControlValueAccessor, OnDestroy, Validator
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

  /**
   * Ecouteur de changement d'event.
   */
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.event?.currentValue) {
      let { event, data } = changes.event.currentValue;
      console.warn(
        `SandboxSubformAComponent - Received ${event} with data : ${data ? data : 'no values'}`
      );
    }
  }

  validate(control: AbstractControl<any, any>): ValidationErrors {
    return this.form.errors;
  }

  registerOnValidatorChange?(fn: () => void): void {
    this.onValidatorChange = fn;
  }

  writeValue(value: any): void {
    if (value) {
      this.form.patchValue(value);
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
