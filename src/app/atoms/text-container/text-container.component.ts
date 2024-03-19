import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './text-container.component.html',
  styleUrl: './text-container.component.scss'
})
export class TextContainerComponent {
  @Input() description: any[] = [];
  @Input() classStyle = '';
}
