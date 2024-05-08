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

  images = [
      "https://res.cloudinary.com/dhmyzbp7j/image/upload/v1715093004/python_rgawr2.png",
      "https://res.cloudinary.com/dhmyzbp7j/image/upload/v1715093004/net_lk9p5m.png",
      "https://res.cloudinary.com/dhmyzbp7j/image/upload/v1715093003/go_ijcito.png",
      "https://res.cloudinary.com/dhmyzbp7j/image/upload/v1715093004/react_tuy9y8.png",
      "https://res.cloudinary.com/dhmyzbp7j/image/upload/v1715093003/angular-gray_ciwan2.png",
      "https://res.cloudinary.com/dhmyzbp7j/image/upload/v1715093006/spring-gray_epmdfq.png"
    ];
}
