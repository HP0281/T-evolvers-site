import { Component } from '@angular/core';
import { CardBannerComponent } from '../../molecules/card-banner/card-banner.component';
import { CardSimpleComponent } from '../../atoms/card-simple/card-simple.component';
import { CardInfoComponent } from '../../molecules/card-info/card-info.component';
import { BannerComponent } from '../../molecules/banner/banner.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SwiperComponent } from '../../organisms/swiper/swiper.component';

@Component({
  selector: 'app-services-iot',
  standalone: true,
  imports: [CardBannerComponent, CardSimpleComponent,CardInfoComponent,BannerComponent, MatProgressSpinnerModule, SwiperComponent],
  templateUrl: './services-iot.component.html',
  styleUrl: './services-iot.component.scss'
})
export class ServicesIOTComponent {

  clients = ["assets/images/logos/nequi.png",
      "assets/images/logos/celsia.png",
      "assets/images/logos/sistecredito.png",
      "assets/images/logos/bancolombia.png",
      "assets/images/logos/Logo_Renting_Colombia.png",
      "assets/images/logos/Logo-ENERBIT.png",
      "assets/images/logos/logo_muverang.png"
    ];
}
