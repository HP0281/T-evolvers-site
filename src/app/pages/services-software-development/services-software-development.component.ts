import { Component } from '@angular/core';
import { CardBannerComponent } from '../../molecules/card-banner/card-banner.component';
import { CardInfoComponent } from '../../molecules/card-info/card-info.component';
import { CardSimpleComponent } from '../../atoms/card-simple/card-simple.component';
import { BannerComponent } from '../../molecules/banner/banner.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SwiperComponent } from '../../organisms/swiper/swiper.component';

@Component({
  selector: 'app-services-software-development',
  standalone: true,
  imports: [CardBannerComponent, CardInfoComponent,CardSimpleComponent, BannerComponent, MatProgressSpinnerModule, SwiperComponent],
  templateUrl: './services-software-development.component.html',
  styleUrl: './services-software-development.component.scss'
})
export class ServicesSoftwareDevelopmentComponent {

  images = ["../../../assets/images/logos/python.png",
      "../../../assets/images/logos/net.png",
      "../../../assets/images/logos/go.png",
      "../../../assets/images/logos/react.png",
      "../../../assets/images/logos/angular.png",
      "../../../assets/images/logos/spring.png"
    ];
}
