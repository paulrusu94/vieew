import { Validators as DefaultValidatorsSet, AbstractControl, FormGroup, ValidatorFn, FormArray } from '@angular/forms';

export class Validators extends DefaultValidatorsSet {
  // tslint:disable-next-line:max-line-length
  static readonly EMAIL_PATTERN = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  static readonly USERNAME_PATTERN = /^[a-zA-Z_\-]+$/;
  static readonly DIGITS_PATTERN = /^[0-9.]*$/;

  static override email() {
    return DefaultValidatorsSet.pattern(Validators.EMAIL_PATTERN);
  }

  static username() {
    return DefaultValidatorsSet.pattern(Validators.USERNAME_PATTERN);
  }

  static digits() {
    return DefaultValidatorsSet.pattern(Validators.DIGITS_PATTERN);
  }

  static MatchPassword(AC: AbstractControl): { [key: string]: any } | null {
    const password = AC.get('password')?.value; // Use optional chaining to handle possible null values
    const confirmPassword = AC.get('confirmPassword')?.value; // Use optional chaining to handle possible null values
    if (password !== confirmPassword) {
      AC.get('confirmPassword')?.setErrors({ MatchPassword: true });
      return { MatchPassword: true };
    } else {
      return null;
    }
  }
}
