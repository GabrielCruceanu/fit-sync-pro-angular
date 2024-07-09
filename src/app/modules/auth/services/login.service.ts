import { Injectable } from '@angular/core';
import { SupabaseService } from '@app/core/services/supabase.service';
import { LoadingService } from '@app/core/services/loading.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(
    private supabaseService: SupabaseService,
    private loadingService: LoadingService,
  ) {}

  async login(email: string, password: string) {
    try {
      this.loadingService.setLoading = true;
      const { error } = await this.supabaseService.supabase.auth.signInWithPassword({ email, password });
      if (error) {
        throw error;
      }
      alert('Login successful');
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    } finally {
      this.loadingService.setLoading = false;
    }
  }
}
