import { CommonModule } from '@angular/common';
import { Component, Input, NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { TextContainerComponent } from '../text-container/text-container.component';

@Component({
  selector: 'app-card-we',
  standalone: true,
  imports: [MatCardModule, CommonModule,TextContainerComponent],
  templateUrl: './card-we.component.html',
  styleUrl: './card-we.component.scss'
})
export class CardWeComponent {
  @Input() icon ='';
  @Input() title = '';
  @Input() description: any[] = [];
  @Input() style = '';

}
