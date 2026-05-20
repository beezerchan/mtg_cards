import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'bzr-controls',
  imports: [MatButtonModule],
  templateUrl: './controls.component.html',
  styleUrl: './controls.component.scss',
})
export class ControlsComponent {
  page_index = 1;
  page_count = 0;
  prev_disabled = true
  next_disabled = true

  previous_card() {
    if (this.page_index > 1) {
      this.page_index--;
    }else{

    }
  }

  next_card() {
    if (this.page_index > 1) {
      this.page_index--;
    }
  }
}
