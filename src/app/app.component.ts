import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardSimpleComponent } from './atoms/card-simple/card-simple.component';
import { CardWeComponent } from './atoms/card-we/card-we.component';
import { CardBannerComponent } from './molecules/card-banner/card-banner.component';
import { FooterComponent } from './molecules/footer/footer.component';
import { CardInfoComponent } from './molecules/card-info/card-info.component';
import { MenuComponent } from './organisms/menu/menu.component';
import { PqrsComponent } from './organisms/pqrs/pqrs.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardSimpleComponent, CardWeComponent,
    CardBannerComponent, FooterComponent, CardInfoComponent, CardBannerComponent,
  MenuComponent,PqrsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'T-Evolvers';
}
