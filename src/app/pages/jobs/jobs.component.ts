import { Component } from '@angular/core';
import { CardBannerComponent } from '../../molecules/card-banner/card-banner.component';
import { CardInfoComponent } from '../../molecules/card-info/card-info.component';
import { BannerComponent } from '../../molecules/banner/banner.component';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [CardBannerComponent, CardInfoComponent, BannerComponent],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.scss'
})
export class JobsComponent {

  public jobsPortal(event:any){
    console.log('event',event);
    
  }
}
