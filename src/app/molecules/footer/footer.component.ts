import { Component } from '@angular/core';
import { TextContainerComponent } from '../../atoms/text-container/text-container.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TextContainerComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
