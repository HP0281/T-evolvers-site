import { Component } from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';
import { CardSimpleComponent } from '../../atoms/card-simple/card-simple.component';
import { CardWeComponent } from '../../atoms/card-we/card-we.component';
import { CardBannerComponent } from '../../molecules/card-banner/card-banner.component';
import { BannerComponent } from '../../molecules/banner/banner.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { SwiperComponent } from '../../organisms/swiper/swiper.component';
import { TextContainerComponent } from '../../atoms/text-container/text-container.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatDividerModule, CardSimpleComponent, CardWeComponent, CardBannerComponent, BannerComponent, MatProgressSpinnerModule, SwiperComponent, TextContainerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {


  images = ["../../../assets/images/logos/nequi.png",
      "../../../assets/images/logos/celsia.png",
      "../../../assets/images/logos/sistecredito.png",
      "../../../assets/images/logos/bancolombia.png",
      "../../../assets/images/logos/Logo_Renting_Colombia.png",
      "../../../assets/images/logos/Logo-ENERBIT.png",
      "../../../assets/images/logos/logo_muverang.png"
    ];
  public download(event:any){
    console.log(event)
  }
}
