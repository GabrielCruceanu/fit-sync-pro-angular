import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NgClass, NgIf } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ButtonComponent } from '@app/shared/components/button/button.component';
import { AuthService } from '@app/modules/auth/auth.service';
import { asyncConfirmPasswordValidator } from '@app/shared/validators';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.scss'],
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterLink, AngularSvgIconModule, NgClass, NgIf, ButtonComponent],
})
export class NewPasswordComponent implements OnInit {
  form!: FormGroup;
  submitted = false;
  passwordTextType!: boolean;
  passwordDoesNotMatch: boolean = false;

  constructor(
    private readonly _formBuilder: FormBuilder,
    private readonly _authService: AuthService,
  ) {
    this.form = this._formBuilder.group({
      password: ['', Validators.required, Validators.minLength(8)],
      confirmPassword: ['', [Validators.required], [asyncConfirmPasswordValidator()]],
    });
  }

  get f() {
    return this.form.controls;
  }

  ngOnInit(): void {}

  togglePasswordTextType() {
    this.passwordTextType = !this.passwordTextType;
  }

  resetPasswordDoesNotMatch() {
    this.passwordDoesNotMatch = false;
  }

  onSubmit() {
    this.submitted = true;
    const { password, confirmPassword } = this.form.value;
    console.log('password', password);
    console.log('confirmPassword', confirmPassword);
    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    if (password !== confirmPassword) {
      this.passwordDoesNotMatch = true;
      return;
    }

    // this._authService.signIn({ email, password });
  }
}