import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CardBrowserComponent} from './components/card-browser/card-browser.component'


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CardBrowserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mtg_cards';
}
