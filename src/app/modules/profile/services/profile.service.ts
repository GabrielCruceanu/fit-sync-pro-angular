import { Injectable, signal } from '@angular/core';
import { clientProfileMock } from '@app/modules/profile/mock/client-profile.mock';
import { ClientProfile } from '@app/modules/profile/model/client-profile.model';
import { TrainerProfile } from '@app/modules/profile/model/trainer-profile.model';
import { NutritionistProfile } from '@app/modules/profile/model/nutritionist-profile.model';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private _profile = signal<ClientProfile | TrainerProfile | NutritionistProfile | null>(null);

  constructor() {
    this._profile.set(clientProfileMock);
  }

  get profile() {
    return this._profile();
  }
}
