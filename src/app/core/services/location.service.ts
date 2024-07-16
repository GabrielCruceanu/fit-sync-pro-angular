import { Injectable, signal, Signal, WritableSignal } from '@angular/core';
import { CITIES_DATA } from '@app/data/location-data';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  private _countries: WritableSignal<string[]> = signal([]);
  private _counties: WritableSignal<string[]> = signal([]);
  private _cities: WritableSignal<string[]> = signal([]);

  constructor() {
    this.fillCountries();
  }

  public getCountries(): Signal<string[]> {
    return this._countries;
  }

  public getCounties(): Signal<string[]> {
    return this._counties;
  }

  public getCities(): Signal<string[]> {
    return this._cities;
  }

  public fillCountries() {
    const duplicateCountries = CITIES_DATA.map((city) => city.country);
    const countries = Array.from(new Set(duplicateCountries)).sort((a, b) => a.localeCompare(b));

    this._countries.set(countries);
  }

  public fillCounties(country: string) {
    const duplicateCounties = CITIES_DATA.map((city) => {
      if (city.country === country) {
        return city.county;
      }
      return '';
    });
    const counties = Array.from(new Set(duplicateCounties)).sort((a, b) => a.localeCompare(b));

    this._counties.set(counties);
  }

  public fillCities(county: string) {
    const duplicateCities = CITIES_DATA.map((city) => {
      if (city.county === county) {
        return city.name;
      }
      return '';
    });
    const cities = Array.from(new Set(duplicateCities)).sort((a, b) => a.localeCompare(b));

    this._cities.set(cities);
  }
}
