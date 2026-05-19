import { Injectable, Signal, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Card } from '../models/card_dtos';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  constructor(http: HttpClient) {
    this._http = http;
  }
  private _http: HttpClient;
  private card_signal = signal<Card|undefined>(undefined);
  private loading_signal = signal<boolean>(false);
  private cards: Card[] = []

  fetch_cards(): void {
    this.loading_signal.set(true);
    this._http
      .get<Card[]>('https://api.magicthegathering.io/v1/cards')
      .subscribe((c) => {
        this.cards = c;
        this.loading_signal.set(false);
        this.card_signal.set(this.cards[0])
      });
  }

  get_card = (): Signal<Card|undefined> => {
    return this.card_signal;
  };

  get_is_loading(): Signal<boolean> {
    return this.loading_signal;
  }
}
