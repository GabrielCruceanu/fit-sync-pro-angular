import { Component } from '@angular/core';
import { InProgressComponent } from '@app/shared/pages/in-progress/in-progress.component';
import { SupabaseService } from '@app/core/services/supabase.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '@app/modules/auth/services/login.service';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '@app/shared/components/button/button.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [InProgressComponent, ReactiveFormsModule, NgIf, RouterLink, ButtonComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm = this.formBuilder.group({
    email: ['', Validators.required, Validators.email],
    password: ['', Validators.required],
  });

  constructor(
    private readonly loginService: LoginService,
    private readonly formBuilder: FormBuilder,
  ) {}

  async login() {
    const { email, password } = this.loginForm.value;

    if (!email || !password) {
      return alert('Email and password are required');
    }

    await this.loginService.login(email, password);
  }
}
