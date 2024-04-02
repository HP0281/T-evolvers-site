import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

import { MatButtonModule } from '@angular/material/button';
import { CardSimpleComponent } from './atoms/card-simple/card-simple.component';
import { CardWeComponent } from './atoms/card-we/card-we.component';
import { CardBannerComponent } from './molecules/card-banner/card-banner.component';
import { FooterComponent } from './molecules/footer/footer.component';
import { CardInfoComponent } from './molecules/card-info/card-info.component';
import { BannerComponent } from './molecules/banner/banner.component';
import { MenuComponent } from './organisms/menu/menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardSimpleComponent, CardWeComponent,
    CardBannerComponent, FooterComponent, CardInfoComponent, CardBannerComponent,
  MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'TE001_ANGULARPAGE_FRONT';


}
