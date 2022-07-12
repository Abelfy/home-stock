import { AbstractControl, ValidatorFn } from '@angular/forms';

export class MismatchValidator {

  static mismatch(otherInputControl: AbstractControl | null): ValidatorFn {
    
    return (inputControl: AbstractControl): { [key: string]: boolean } | null => {
      if(!otherInputControl) return null;
      if (inputControl.value !== undefined
        && inputControl.value.trim() != ""
        && inputControl.value !== otherInputControl.value) {
        return { 'mismatch': true };
      }

      return null;
    };
  }
}