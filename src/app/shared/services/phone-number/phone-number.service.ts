import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PhoneNumberService {
  constructor() {}

  cleanPhoneNumber(phoneNumber: string): string {
    let clearNumber: string = phoneNumber;
    let countryCode: string = '';

    // Remove spaces, parentheses
    clearNumber = clearNumber.replace(/\s/g, '').replace(/[()]/g, '');

    // Check for country code starting with "+"
    if (clearNumber.startsWith('+')) {
      const match = clearNumber.match(/^\+(\d+)/);
      if (match) {
        countryCode = '+' + match[1];
        clearNumber = clearNumber.slice(match[0].length);
      }
    } else if (clearNumber.startsWith('00')) {
      const match = clearNumber.match(/^00(\d+)/);
      if (match) {
        countryCode = '+' + match[1];
        clearNumber = clearNumber.slice(match[0].length);
      }
    }

    // Remove leading zeroes from the phone number
    clearNumber = clearNumber.replace(/^0+/, '');

    // Return formatted number with the country code
    return countryCode + clearNumber;
  }
}
