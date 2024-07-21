import { Component, OnInit, Signal } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NgClass, NgIf } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ButtonComponent } from '@app/shared/components/button/button.component';
import { Store } from '@ngrx/store';
import { forgotPassword } from '@app/auth/store/auth.actions';
import { selectAuthError, selectAuthLoading } from '@app/auth/store/auth.selectors';
import { AlertComponent } from '@app/shared/components/alert/alert.component';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    AngularSvgIconModule,
    NgClass,
    NgIf,
    ButtonComponent,
    AlertComponent,
  ],
})
export class ForgotPasswordComponent implements OnInit {
  form!: FormGroup;
  submitted = false;

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
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    this.submitted = true;
    const { email } = this.form.value;

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    this._store.dispatch(forgotPassword(email));
  }
}
