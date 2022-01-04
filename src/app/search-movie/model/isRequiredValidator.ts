import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function isRequiredValidator(identify : string, title : string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const control1 = control.get(identify)
    const control2 = control.get(title);

    if (control1?.value || control2?.value) {
      return { isRequired: false };
    }

    return { isRequired: true };
  };
}
