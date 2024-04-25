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
    'https://res.cloudinary.com/dodrsbl4f/image/upload/v1702946325/T-evolvers/gitarmwqwwkarwefdg1c.png',
    'https://res.cloudinary.com/dodrsbl4f/image/upload/v1702946364/T-evolvers/hkzfxn7apepewnropjf5.png',
    'https://res.cloudinary.com/dodrsbl4f/image/upload/v1702946414/T-evolvers/ooaiplrjj0e7eaye4ute.avif',
    'https://res.cloudinary.com/dodrsbl4f/image/upload/v1702946452/T-evolvers/h3rm4apawxh0qseotakl.svg',
    'https://res.cloudinary.com/dodrsbl4f/image/upload/v1702946494/T-evolvers/roga7vegdhcitn96fhul.png',
    'https://res.cloudinary.com/dodrsbl4f/image/upload/v1702946540/T-evolvers/dpojt71b6scrudocidyj.png',
    'https://res.cloudinary.com/dodrsbl4f/image/upload/v1702946325/T-evolvers/gitarmwqwwkarwefdg1c.png',
    'https://res.cloudinary.com/dodrsbl4f/image/upload/v1702946364/T-evolvers/hkzfxn7apepewnropjf5.png',
    'https://res.cloudinary.com/dodrsbl4f/image/upload/v1702946414/T-evolvers/ooaiplrjj0e7eaye4ute.avif',
    'https://res.cloudinary.com/dodrsbl4f/image/upload/v1702946452/T-evolvers/h3rm4apawxh0qseotakl.svg',
    'https://res.cloudinary.com/dodrsbl4f/image/upload/v1702946494/T-evolvers/roga7vegdhcitn96fhul.png',
    'https://res.cloudinary.com/dodrsbl4f/image/upload/v1702946540/T-evolvers/dpojt71b6scrudocidyj.png',
  ]
}
