import { AbstractControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

export class CustomValidators {
  static phoneNumber(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const value = control.value;
      const isValid =
        Validators.required(control) === null &&

        /^\+7\d{10}$/.test(value);

      return isValid ? null : { 'invalidPhoneNumber': { value: control.value } };
    };
  }

  static url(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) {
        return null;
      }

      const urlPattern =
        /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w.-]*)*\/?$/;

      if (urlPattern.test(control.value)) {
        return null;
      } else {
        return { invalidUrl: true };
      }
    };
  }

  static phoneNumberErrorMessage(errors: any): string {
    if (errors.required) {
      return 'Phone Number is required.';
    } else if (errors.invalidPhoneNumber) {
      return 'Invalid Phone Number format.';
    }

    return '';
  }
}
