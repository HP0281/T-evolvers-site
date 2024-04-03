import { Component } from '@angular/core';
import { CardBannerComponent } from '../../molecules/card-banner/card-banner.component';
import { CardSimpleComponent } from '../../atoms/card-simple/card-simple.component';
import { CardInfoComponent } from '../../molecules/card-info/card-info.component';
import { BannerComponent } from '../../molecules/banner/banner.component';

@Component({
  selector: 'app-services-devops',
  standalone: true,
  imports: [CardBannerComponent, CardSimpleComponent, CardInfoComponent, BannerComponent],
  templateUrl: './services-devops.component.html',
  styleUrl: './services-devops.component.scss'
})
export class ServicesDevopsComponent {

}
