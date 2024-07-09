import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import {
  FormsModule,
  NgForm,
  ReactiveFormsModule,
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { finalize } from 'rxjs';
import { animations } from '@app/core/animations';
import { AlertType } from '@app/shared/components/alert/alert.types';
import { AuthService } from '@app/modules/auth/auth.service';
import { AppValidators } from '@app/shared/validators';
import { AlertComponent } from '@app/shared/components/alert/alert.component';

@Component({
  selector: 'auth-reset-password',
  templateUrl: './reset-password.component.html',
  encapsulation: ViewEncapsulation.None,
  animations: animations,
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterLink, AlertComponent],
})
export class AuthResetPasswordComponent implements OnInit {
  @ViewChild('resetPasswordNgForm') resetPasswordNgForm!: NgForm;

  alert: { type: AlertType; message: string } = {
    type: 'success',
    message: '',
  };
  resetPasswordForm!: UntypedFormGroup;
  showAlert: boolean = false;

  /**
   * Constructor
   */
  constructor(
    private _authService: AuthService,
    private _formBuilder: UntypedFormBuilder,
  ) {}

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    // Create the form
    this.resetPasswordForm = this._formBuilder.group(
      {
        password: ['', Validators.required],
        passwordConfirm: ['', Validators.required],
      },
      {
        validators: AppValidators.mustMatch('password', 'passwordConfirm'),
      },
    );
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Reset password
   */
  resetPassword(): void {
    // Return if the form is invalid
    if (this.resetPasswordForm.invalid) {
      return;
    }

    // Disable the form
    this.resetPasswordForm.disable();

    // Hide the alert
    this.showAlert = false;

    // Send the request to the server
    this._authService
      .resetPassword(this.resetPasswordForm.get('password')?.value)
      .pipe(
        finalize(() => {
          // Re-enable the form
          this.resetPasswordForm.enable();

          // Reset the form
          this.resetPasswordNgForm.resetForm();

          // Show the alert
          this.showAlert = true;
        }),
      )
      .subscribe(
        (response: any) => {
          // Set the alert
          this.alert = {
            type: 'success',
            message: 'Your password has been reset.',
          };
        },
        (response: any) => {
          // Set the alert
          this.alert = {
            type: 'error',
            message: 'Something went wrong, please try again.',
          };
        },
      );
  }
}
