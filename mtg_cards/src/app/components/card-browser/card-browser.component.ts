import { Component, OnInit, viewChild } from '@angular/core';
import { CardViewComponent } from '../card-view/card-view.component';
import {ControlsComponent} from '..//controls/controls.component'
import { Card } from '../../models/card_dtos';
import { CardService } from '../../services/card.service';

@Component({
  selector: 'bzr-card-browser',
  imports: [CardViewComponent, ControlsComponent],
  templateUrl: './card-browser.component.html',
  styleUrl: './card-browser.component.scss'
})
export class CardBrowserComponent implements OnInit {
  constructor(card_service: CardService){
    this._card_service = card_service
    this.current_card = this._card_service.get_card()
  }

  private _card_service: CardService
  current_card: Card | undefined
  card_viewer= viewChild(CardViewComponent)

  ngOnInit(){
    this.current_card 
    console.log(this.current_card)
  }

}
