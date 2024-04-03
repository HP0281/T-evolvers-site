import { Component } from '@angular/core';
import { CardBannerComponent } from '../../molecules/card-banner/card-banner.component';
import { CardInfoComponent } from '../../molecules/card-info/card-info.component';
import { CardSimpleComponent } from '../../atoms/card-simple/card-simple.component';
import { BannerComponent } from '../../molecules/banner/banner.component';

@Component({
  selector: 'app-services-software-development',
  standalone: true,
  imports: [CardBannerComponent, CardInfoComponent,CardSimpleComponent, BannerComponent],
  templateUrl: './services-software-development.component.html',
  styleUrl: './services-software-development.component.scss'
})
export class ServicesSoftwareDevelopmentComponent {

}
