import { Injectable, OnInit, Signal, signal } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Card } from '../models/card_dtos';

@Injectable({
  providedIn: 'root',
})
export class CardService implements OnInit {
  constructor(http: HttpClient) {
    this._http = http;
  }
  private _http: HttpClient;
  private card_signal = signal<Card|undefined>(undefined);
  private loading_signal = signal<boolean>(false);
  private cards: Card[] = []

  private headers: HttpHeaders = new HttpHeaders()


  fetch_cards(): void {
    this.loading_signal.set(true);
    this._http
      .get<any>('/api/cards', {headers: this.headers})
      .subscribe((c) => {
        console.log(c.cards)
        this.cards = c.cards;
        this.loading_signal.set(false);
        this.card_signal.set(this.cards[0])
        console.log(this.cards[0])
      });
  }

  get_card = (): void => {
    console.log('getting cards')
   // return this.card_signal;
  };

  get_is_loading(): Signal<boolean> {
    return this.loading_signal;
  }

  ngOnInit(): void {
    this.headers.append('Content-Type', 'application/json')
    this.headers.append('Access-Control-Allow-Origin', '*')
    this.fetch_cards()
  }
}
