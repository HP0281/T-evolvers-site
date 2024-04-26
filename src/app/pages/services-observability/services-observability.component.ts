import { Component } from '@angular/core';
import { CardBannerComponent } from '../../molecules/card-banner/card-banner.component';
import { CardInfoComponent } from '../../molecules/card-info/card-info.component';
import { CardSimpleComponent } from '../../atoms/card-simple/card-simple.component';
import { BannerComponent } from '../../molecules/banner/banner.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SwiperComponent } from '../../organisms/swiper/swiper.component';

@Component({
  selector: 'app-services-observability',
  standalone: true,
  imports: [CardBannerComponent,CardInfoComponent, CardSimpleComponent, BannerComponent, MatProgressSpinnerModule, SwiperComponent],
  templateUrl: './services-observability.component.html',
  styleUrl: './services-observability.component.scss'
})
export class ServicesObservabilityComponent {

  images = [
    'https://res.cloudinary.com/dodrsbl4f/image/upload/v1702944843/T-evolvers/fvbktmomw3zc0n3ibqxq.png',
    'https://res.cloudinary.com/dodrsbl4f/image/upload/v1702944886/T-evolvers/smk8ddfsirdezj7xnuhy.png',
    'https://res.cloudinary.com/dodrsbl4f/image/upload/v1702944930/T-evolvers/e2z4xjl3uzrjj5rbflbm.png',
    'https://res.cloudinary.com/dodrsbl4f/image/upload/v1702944969/T-evolvers/frfmupzlevsrg1qh7tf1.png',
    'https://res.cloudinary.com/dodrsbl4f/image/upload/v1702945014/T-evolvers/zdpmdlonwpfawgrfw69p.png',
    'https://res.cloudinary.com/dodrsbl4f/image/upload/v1702945051/T-evolvers/zxa3obgw7haz5btu7adi.png',
    'https://res.cloudinary.com/dodrsbl4f/image/upload/v1702944843/T-evolvers/fvbktmomw3zc0n3ibqxq.png',
    'https://res.cloudinary.com/dodrsbl4f/image/upload/v1702944886/T-evolvers/smk8ddfsirdezj7xnuhy.png',
    'https://res.cloudinary.com/dodrsbl4f/image/upload/v1702944930/T-evolvers/e2z4xjl3uzrjj5rbflbm.png',
    'https://res.cloudinary.com/dodrsbl4f/image/upload/v1702944969/T-evolvers/frfmupzlevsrg1qh7tf1.png',
    'https://res.cloudinary.com/dodrsbl4f/image/upload/v1702945014/T-evolvers/zdpmdlonwpfawgrfw69p.png',
    'https://res.cloudinary.com/dodrsbl4f/image/upload/v1702945051/T-evolvers/zxa3obgw7haz5btu7adi.png',
  ];

}
