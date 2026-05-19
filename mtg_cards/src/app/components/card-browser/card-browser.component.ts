import { Component, OnInit } from '@angular/core';
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
  }

  private _card_service: CardService

 
  current_card: Card|undefined

  get_next_card(): void{

  }

  ngOnInit(){
    // this.current_card =
     this._card_service.get_card()
  }

}
