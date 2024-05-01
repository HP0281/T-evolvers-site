import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { TextContainerComponent } from '../../atoms/text-container/text-container.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-banner',
  standalone: true,
  imports: [MatCardModule,TextContainerComponent, CommonModule],
  templateUrl: './card-banner.component.html',
  styleUrl: './card-banner.component.scss'
})
export class CardBannerComponent {
  @Input() img='';
  @Input() title='';
  @Input() subtitle = '';
  @Input() description: any[]=[];
  @Input() divider = false;
  @Input() invert = false;
  @Input() imgstyle = "";
}
