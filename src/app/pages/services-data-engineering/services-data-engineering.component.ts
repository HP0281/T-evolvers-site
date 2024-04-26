import { Component } from '@angular/core';
import { CardBannerComponent } from '../../molecules/card-banner/card-banner.component';
import { CardInfoComponent } from '../../molecules/card-info/card-info.component';
import { CardSimpleComponent } from '../../atoms/card-simple/card-simple.component';
import { BannerComponent } from '../../molecules/banner/banner.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SwiperComponent } from '../../organisms/swiper/swiper.component';

@Component({
  selector: 'app-services-data-engineering',
  standalone: true,
  imports: [CardBannerComponent,CardInfoComponent,CardSimpleComponent, BannerComponent,MatProgressSpinnerModule, SwiperComponent],
  templateUrl: './services-data-engineering.component.html',
  styleUrl: './services-data-engineering.component.scss'
})
export class ServicesDataEngineeringComponent {
  images = [
    'https://res.cloudinary.com/dodrsbl4f/image/upload/v1702945659/T-evolvers/yhxhhbv9jzoxti6ssjbm.png',
    'https://res.cloudinary.com/dodrsbl4f/image/upload/v1702945699/T-evolvers/fhg527xwtfyasvmtzfn0.png',
    'https://res.cloudinary.com/dodrsbl4f/image/upload/v1702945745/T-evolvers/pvfn7szxmozzewawqtc2.png',
    'https://res.cloudinary.com/dodrsbl4f/image/upload/v1702945787/T-evolvers/oduaga8k0no0hm61gwmh.png',
    'https://res.cloudinary.com/dodrsbl4f/image/upload/v1702945840/T-evolvers/dsbakctfsqnhvq947jgu.png',
    'https://res.cloudinary.com/dodrsbl4f/image/upload/v1702945659/T-evolvers/yhxhhbv9jzoxti6ssjbm.png',
    'https://res.cloudinary.com/dodrsbl4f/image/upload/v1702945699/T-evolvers/fhg527xwtfyasvmtzfn0.png',
    'https://res.cloudinary.com/dodrsbl4f/image/upload/v1702945745/T-evolvers/pvfn7szxmozzewawqtc2.png',
    'https://res.cloudinary.com/dodrsbl4f/image/upload/v1702945787/T-evolvers/oduaga8k0no0hm61gwmh.png',
    'https://res.cloudinary.com/dodrsbl4f/image/upload/v1702945840/T-evolvers/dsbakctfsqnhvq947jgu.png',
  ];
  clients = ["assets/images/logos/nequi.png",
      "assets/images/logos/celsia.png",
      "assets/images/logos/sistecredito.png",
      "assets/images/logos/bancolombia.png",
      "assets/images/logos/Logo_Renting_Colombia.png",
      "assets/images/logos/Logo-ENERBIT.png",
      "assets/images/logos/logo_muverang.png"
    ];
}
