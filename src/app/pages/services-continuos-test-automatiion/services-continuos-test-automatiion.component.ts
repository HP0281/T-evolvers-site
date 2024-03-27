import { Component } from '@angular/core';
import { CardBannerComponent } from '../../molecules/card-banner/card-banner.component';
import { CardSimpleComponent } from '../../atoms/card-simple/card-simple.component';
import { CardInfoComponent } from '../../molecules/card-info/card-info.component';

@Component({
  selector: 'app-services-continuos-test-automatiion',
  standalone: true,
  imports: [CardBannerComponent,CardSimpleComponent, CardInfoComponent],
  templateUrl: './services-continuos-test-automatiion.component.html',
  styleUrl: './services-continuos-test-automatiion.component.scss'
})
export class ServicesContinuosTestAutomatiionComponent {

}
