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
    'https://res.cloudinary.com/dhmyzbp7j/image/upload/v1715112243/logo_datadog.png',
    'https://res.cloudinary.com/dhmyzbp7j/image/upload/v1715112136/dynatrace-logo.png',
    'https://res.cloudinary.com/dhmyzbp7j/image/upload/v1715112017/logo_opentelemetry.png',
    'https://res.cloudinary.com/dhmyzbp7j/image/upload/v1715111810/logo_prometheus.png',
    'https://res.cloudinary.com/dhmyzbp7j/image/upload/v1715111674/logo_grafana.png',
    'https://res.cloudinary.com/dhmyzbp7j/image/upload/v1715112457/Elasticsearch_logo.png'
  ];

}
