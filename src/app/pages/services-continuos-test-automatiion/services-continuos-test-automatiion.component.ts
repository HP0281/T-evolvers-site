import { Component } from '@angular/core';
import { CardBannerComponent } from '../../molecules/card-banner/card-banner.component';
import { CardSimpleComponent } from '../../atoms/card-simple/card-simple.component';
import { CardInfoComponent } from '../../molecules/card-info/card-info.component';
import { BannerComponent } from '../../molecules/banner/banner.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SwiperComponent } from '../../organisms/swiper/swiper.component';

@Component({
  selector: 'app-services-continuos-test-automatiion',
  standalone: true,
  imports: [CardBannerComponent,CardSimpleComponent, CardInfoComponent,BannerComponent,MatProgressSpinnerModule, SwiperComponent],
  templateUrl: './services-continuos-test-automatiion.component.html',
  styleUrl: './services-continuos-test-automatiion.component.scss'
})
export class ServicesContinuosTestAutomatiionComponent {
  images = [
    'https://res.cloudinary.com/dhmyzbp7j/image/upload/v1715110575/serenity-bdd_1_-modified_oh9zr5.png',
    'https://res.cloudinary.com/dhmyzbp7j/image/upload/v1715110182/logo_karate_labs.png',
    'https://res.cloudinary.com/dhmyzbp7j/image/upload/v1715109315/xk6-modified_kdzxcp.png',
    'https://res.cloudinary.com/dhmyzbp7j/image/upload/v1715109148/logo_playwright.png',
    'https://res.cloudinary.com/dhmyzbp7j/image/upload/v1715108923/logo_selenium.png',
    'https://res.cloudinary.com/dhmyzbp7j/image/upload/v1715110848/logo_postman.png',
    'https://res.cloudinary.com/dhmyzbp7j/image/upload/v1715110963/logo_jmeter.png'
  ]
}
