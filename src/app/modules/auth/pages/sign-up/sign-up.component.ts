import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import {
  FormsModule,
  NgForm,
  ReactiveFormsModule,
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AlertComponent } from '@app/shared/components/alert/alert.component';
import { animations } from '@app/core/animations';
import { AlertType } from '@app/shared/components/alert/alert.types';
import { AuthService } from '@app/modules/auth/auth.service';
import { ButtonComponent } from '@app/shared/components/button/button.component';
import { SvgIconComponent } from 'angular-svg-icon';

@Component({
  selector: 'auth-sign-up',
  templateUrl: './sign-up.component.html',
  encapsulation: ViewEncapsulation.None,
  animations: animations,
  standalone: true,
  imports: [RouterLink, AlertComponent, FormsModule, ReactiveFormsModule, ButtonComponent, SvgIconComponent],
})
export class AuthSignUpComponent implements OnInit {
  @ViewChild('signUpNgForm') signUpNgForm!: NgForm;

  alert: { type: AlertType; message: string } = {
    type: 'success',
    message: '',
  };
  signUpForm!: UntypedFormGroup;
  showAlert: boolean = false;

  /**
   * Constructor
   */
  constructor(
    private _authService: AuthService,
    private _formBuilder: UntypedFormBuilder,
    private _router: Router,
  ) {}

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    // Create the form
    this.signUpForm = this._formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      company: [''],
      agreements: ['', Validators.requiredTrue],
    });
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Sign up
   */
  signUp(): void {
    // Do nothing if the form is invalid
    if (this.signUpForm.invalid) {
      return;
    }

    // Disable the form
    this.signUpForm.disable();

    // Hide the alert
    this.showAlert = false;

    // Sign up
    this._authService.signUp(this.signUpForm.value).subscribe(
      (response: any) => {
        // Navigate to the confirmation required page
        this._router.navigateByUrl('/confirmation-required');
      },
      (response: any) => {
        // Re-enable the form
        this.signUpForm.enable();

        // Reset the form
        this.signUpNgForm.resetForm();

        // Set the alert
        this.alert = {
          type: 'error',
          message: 'Something went wrong, please try again.',
        };

        // Show the alert
        this.showAlert = true;
      },
    );
  }
}
