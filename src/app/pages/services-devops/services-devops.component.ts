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
    'https://res.cloudinary.com/dhmyzbp7j/image/upload/v1715097251/github-actions.png',
    'https://res.cloudinary.com/dhmyzbp7j/image/upload/v1715100893/logo_terraform.webp',
    'https://res.cloudinary.com/dhmyzbp7j/image/upload/v1715098689/logo-sonar_jcyivw.png',
    'https://res.cloudinary.com/dhmyzbp7j/image/upload/v1715099598/logo_snyk.png',
    'https://res.cloudinary.com/dhmyzbp7j/image/upload/v1715100412/logo_gitlabs.png',
    'https://res.cloudinary.com/dhmyzbp7j/image/upload/v1715100260/logo_azure_devops.png',
    'https://res.cloudinary.com/dhmyzbp7j/image/upload/v1715099809/logo_jenkins.png'
  ]
}
