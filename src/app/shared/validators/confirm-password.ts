import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { delay, Observable, of } from 'rxjs';

export function asyncConfirmPasswordValidator(): AsyncValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    if (password && confirmPassword && password.value !== confirmPassword.value) {
      return of({ passwordMismatch: true }).pipe(delay(1000));
    }
    return of(null).pipe(delay(1000));
  };
}
