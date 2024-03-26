import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-card-simple',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './card-simple.component.html',
  styleUrl: './card-simple.component.scss'
})
export class CardSimpleComponent {

  @Input() icon = "" ;
  @Input() title = "";
  @Input() description = "";
  @Input() backgroundImage = true;

}
