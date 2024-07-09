import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';
import { animations } from '@app/core/animations';

@Component({
  selector: 'auth-confirmation-required',
  templateUrl: './confirmation-required.component.html',
  encapsulation: ViewEncapsulation.None,
  animations: animations,
  standalone: true,
  imports: [RouterLink],
})
export class AuthConfirmationRequiredComponent {
  /**
   * Constructor
   */
  constructor() {}
}
