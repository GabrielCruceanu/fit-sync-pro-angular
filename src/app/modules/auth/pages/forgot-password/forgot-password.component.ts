import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NgClass, NgIf } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ButtonComponent } from '@app/shared/components/button/button.component';
import { AuthService } from '@app/modules/auth/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterLink, AngularSvgIconModule, NgClass, NgIf, ButtonComponent],
})
export class ForgotPasswordComponent implements OnInit {
  form!: FormGroup;
  submitted = false;

  constructor(
    private readonly _formBuilder: FormBuilder,
    private readonly _authService: AuthService,
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

    this._authService.forgotPassword(email);
  }
}
