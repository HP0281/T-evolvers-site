import { Component } from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';
import { CardSimpleComponent } from '../../atoms/card-simple/card-simple.component';
import { CardWeComponent } from '../../atoms/card-we/card-we.component';
import { CardBannerComponent } from '../../molecules/card-banner/card-banner.component';
import { BannerComponent } from '../../molecules/banner/banner.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { SwiperComponent } from '../../organisms/swiper/swiper.component';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatDividerModule, CardSimpleComponent, CardWeComponent, CardBannerComponent, BannerComponent, MatProgressSpinnerModule, SwiperComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {


  images = ["https://res.cloudinary.com/dhmyzbp7j/image/upload/v1716258825/logos/nequi_ghfaie.png",
      "https://res.cloudinary.com/dhmyzbp7j/image/upload/v1716258825/logos/sistecredito_de66zo.png",
      "https://res.cloudinary.com/dhmyzbp7j/image/upload/v1716258825/logos/Logo_Renting_Colombia_pddgux.png",
      "https://res.cloudinary.com/dhmyzbp7j/image/upload/v1716258825/logos/Logo-ENERBIT_toun4y.png",
      "https://res.cloudinary.com/dhmyzbp7j/image/upload/v1716258825/logos/logo_muverang_jueyxn.png"
    ];
  constructor(private router:Router,
    private route: ActivatedRoute,){

  }

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      const tree = this.router.parseUrl(this.router.url);
      if (tree.fragment) {
        const element = document.getElementById(tree.fragment);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  }
  public download(event:any){
    window.open('https://drive.google.com/file/d/1CqbLm7zMrga0Q6Jmu0jrTYdyZatwfT2y/view','_blank');
  }
}
