import { Component } from '@angular/core';
import { CardBannerComponent } from '../../molecules/card-banner/card-banner.component';
import { CardInfoComponent } from '../../molecules/card-info/card-info.component';
import { CardSimpleComponent } from '../../atoms/card-simple/card-simple.component';
import { BannerComponent } from '../../molecules/banner/banner.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-services-observability',
  standalone: true,
  imports: [CardBannerComponent,CardInfoComponent, CardSimpleComponent, BannerComponent, MatProgressSpinnerModule],
  templateUrl: './services-observability.component.html',
  styleUrl: './services-observability.component.scss'
})
export class ServicesObservabilityComponent {

}
