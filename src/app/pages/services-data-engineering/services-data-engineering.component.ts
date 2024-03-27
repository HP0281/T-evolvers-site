import { Component } from '@angular/core';
import { CardBannerComponent } from '../../molecules/card-banner/card-banner.component';
import { CardInfoComponent } from '../../molecules/card-info/card-info.component';
import { CardSimpleComponent } from '../../atoms/card-simple/card-simple.component';

@Component({
  selector: 'app-services-data-engineering',
  standalone: true,
  imports: [CardBannerComponent,CardInfoComponent,CardSimpleComponent],
  templateUrl: './services-data-engineering.component.html',
  styleUrl: './services-data-engineering.component.scss'
})
export class ServicesDataEngineeringComponent {

}
