import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { TextContainerComponent } from '../../atoms/text-container/text-container.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-info',
  standalone: true,
  imports: [MatCardModule, TextContainerComponent, CommonModule],
  templateUrl: './card-info.component.html',
  styleUrl: './card-info.component.scss'
})
export class CardInfoComponent {
  @Input() img = '';
  @Input() title='';
  @Input() subtitle = '';
  @Input() highlighted = '';
  @Input() description : any[]= []
  @Input() isList = false;
}
