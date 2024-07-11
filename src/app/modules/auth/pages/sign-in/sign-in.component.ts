import { Component, OnInit, Signal } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AsyncPipe, NgClass, NgIf } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ButtonComponent } from '@app/shared/components/button/button.component';
import { Store } from '@ngrx/store';
import { signIn } from '@app/modules/auth/store/auth.actions';
import { selectAuthError, selectAuthLoading } from '@app/modules/auth/store/auth.selectors';
import { Observable } from 'rxjs';
import { AlertComponent } from '@app/shared/components/alert/alert.component';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    AngularSvgIconModule,
    NgClass,
    NgIf,
    ButtonComponent,
    AsyncPipe,
    AlertComponent,
  ],
})
export class SignInComponent implements OnInit {
  form!: FormGroup;
  submitted = false;
  passwordTextType!: boolean;

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
      password: ['', Validators.required],
    });
  }

  togglePasswordTextType() {
    this.passwordTextType = !this.passwordTextType;
  }

  onSubmit() {
    this.submitted = true;
    const { email, password } = this.form.value;

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    this._store.dispatch(signIn({ email, password }));
  }
}
