import { Component, OnInit, Signal } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';
import { JsonPipe, NgClass, NgIf } from '@angular/common';
import { asyncConfirmPasswordValidator } from '@app/shared/validators';
import { Store } from '@ngrx/store';
import { signUp } from '@app/modules/auth/store/auth.actions';
import { AlertComponent } from '@app/shared/components/alert/alert.component';
import { selectAuthError, selectAuthLoading } from '@app/modules/auth/store/auth.selectors';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    AngularSvgIconModule,
    ButtonComponent,
    JsonPipe,
    NgClass,
    NgIf,
    AlertComponent,
  ],
})
export class SignUpComponent implements OnInit {
  form!: FormGroup;
  submitted = false;
  passwordTextType!: boolean;
  acceptTerm: boolean = false;
  passwordDoesNotMatch: boolean = false;

  authLoading: Signal<boolean> = this._store.selectSignal(selectAuthLoading);
  authError: Signal<string> = this._store.selectSignal(selectAuthError);

  constructor(
    private readonly _formBuilder: FormBuilder,
    private readonly _store: Store,
  ) {}

  get f() {
    return this.form.controls;
  }

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required, Validators.minLength(8)],
      confirmPassword: ['', [Validators.required], [asyncConfirmPasswordValidator()]],
    });
  }

  // Public methods
  togglePasswordTextType() {
    this.passwordTextType = !this.passwordTextType;
  }

  toggleAcceptTerm() {
    this.acceptTerm = !this.acceptTerm;
  }

  resetPasswordDoesNotMatch() {
    this.passwordDoesNotMatch = false;
  }

  onSubmit() {
    this.submitted = true;
    const { email, password, confirmPassword } = this.form.value;
    console.log('this.form', this.form);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    if (password !== confirmPassword) {
      this.passwordDoesNotMatch = true;
      return;
    }

    this._store.dispatch(signUp({ email, password }));
  }
}
