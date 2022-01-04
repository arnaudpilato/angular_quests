import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

export function rangeDateValidator(minYear: number, maxYear: Date): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const yearControl = control;
    const maxYearRequired = maxYear.getFullYear();

    if (minYear > yearControl?.value || maxYearRequired < yearControl?.value) {
      return {
        min: {
          minYearRequired: minYear.toString(),
          maxYearRequired: maxYearRequired.toString(),
        },
      };
    } else {
      return null;
    }
  };
}
