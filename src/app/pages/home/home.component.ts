import { Component } from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';
import { CardSimpleComponent } from '../../atoms/card-simple/card-simple.component';
import { CardWeComponent } from '../../atoms/card-we/card-we.component';
import { CardBannerComponent } from '../../molecules/card-banner/card-banner.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatDividerModule, CardSimpleComponent, CardWeComponent, CardBannerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
