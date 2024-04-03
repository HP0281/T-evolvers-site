import { Component } from '@angular/core';
import { CardBannerComponent } from '../../molecules/card-banner/card-banner.component';
import { CardSimpleComponent } from '../../atoms/card-simple/card-simple.component';
import { CardInfoComponent } from '../../molecules/card-info/card-info.component';
import { BannerComponent } from '../../molecules/banner/banner.component';

@Component({
  selector: 'app-services-iot',
  standalone: true,
  imports: [CardBannerComponent, CardSimpleComponent,CardInfoComponent,BannerComponent],
  templateUrl: './services-iot.component.html',
  styleUrl: './services-iot.component.scss'
})
export class ServicesIOTComponent {

}
