import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ThemeService } from '@app/core/services/theme.service';
import { QuotesService } from '@app/shared/services/quotes/quotes.service';
import { Quote } from '@app/core/models/quote.model';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  standalone: true,
  imports: [AngularSvgIconModule, RouterOutlet],
})
export class AuthComponent {
  public randomQuote: Quote = this._quotesService.getRandomQuote();

  constructor(
    public themeService: ThemeService,
    private _quotesService: QuotesService,
  ) {}
}
