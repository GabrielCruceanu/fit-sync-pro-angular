import { Injectable, signal, Signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private _loading = signal<boolean>(false);
  constructor() {}

  public get loading(): boolean {
    return this._loading();
  }
  public set setLoading(value: boolean) {
    this._loading.set(value);
  }
}
