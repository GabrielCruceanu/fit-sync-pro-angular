import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Quote } from '@app/core/models/quote.model';
import { BEST_MOTIVATIONAL_QUOTES } from '@app/shared/services/quotes/quotes';

@Injectable({
  providedIn: 'root',
})
export class QuotesService {
  constructor() {}

  public getMotivationalQuotes(): Observable<Quote[]> {
    return of(BEST_MOTIVATIONAL_QUOTES);
  }

  public getRandomQuote(): Quote {
    return BEST_MOTIVATIONAL_QUOTES.sort(() => Math.random() - Math.random())[0];
  }
}
