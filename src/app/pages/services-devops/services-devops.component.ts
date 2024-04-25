import { Component } from '@angular/core';
import { CardBannerComponent } from '../../molecules/card-banner/card-banner.component';
import { CardSimpleComponent } from '../../atoms/card-simple/card-simple.component';
import { CardInfoComponent } from '../../molecules/card-info/card-info.component';
import { BannerComponent } from '../../molecules/banner/banner.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SwiperComponent } from '../../organisms/swiper/swiper.component';

@Component({
  selector: 'app-services-devops',
  standalone: true,
  imports: [CardBannerComponent, CardSimpleComponent, CardInfoComponent, BannerComponent, MatProgressSpinnerModule, SwiperComponent],
  templateUrl: './services-devops.component.html',
  styleUrl: './services-devops.component.scss'
})
export class ServicesDevopsComponent {

  images = [
    'https://res.cloudinary.com/dodrsbl4f/image/upload/v1702936382/T-evolvers/myq21wzxkd9etvrijhqm.webp',
    'https://res.cloudinary.com/dodrsbl4f/image/upload/v1702936442/T-evolvers/aivbz5zrvpble1pu9ueg.jpg',
    'https://res.cloudinary.com/dodrsbl4f/image/upload/v1702936496/T-evolvers/agr54ix1nlweaojhvlc0.jpg',
    'https://res.cloudinary.com/dodrsbl4f/image/upload/v1702936536/T-evolvers/sczqus46cloqd94tb9wr.png',
    'https://res.cloudinary.com/dodrsbl4f/image/upload/v1702936343/T-evolvers/t9otoivo3ipnnelhrwnk.png',
    'https://res.cloudinary.com/dodrsbl4f/image/upload/v1702936382/T-evolvers/myq21wzxkd9etvrijhqm.webp',
    'https://res.cloudinary.com/dodrsbl4f/image/upload/v1702936442/T-evolvers/aivbz5zrvpble1pu9ueg.jpg',
    'https://res.cloudinary.com/dodrsbl4f/image/upload/v1702936496/T-evolvers/agr54ix1nlweaojhvlc0.jpg',
    'https://res.cloudinary.com/dodrsbl4f/image/upload/v1702936536/T-evolvers/sczqus46cloqd94tb9wr.png',
    'https://res.cloudinary.com/dodrsbl4f/image/upload/v1702936343/T-evolvers/t9otoivo3ipnnelhrwnk.png'
  ]

}
