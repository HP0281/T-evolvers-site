import { Component } from '@angular/core';
import { CardBannerComponent } from '../../molecules/card-banner/card-banner.component';
import { CardInfoComponent } from '../../molecules/card-info/card-info.component';
import { BannerComponent } from '../../molecules/banner/banner.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { PqrsComponent } from '../../organisms/pqrs/pqrs.component';
import { PopupJobsComponent } from '../../organisms/popup-jobs/popup-jobs.component';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [CardBannerComponent, CardInfoComponent, BannerComponent, MatProgressSpinnerModule, MatDialogModule],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.scss'
})
export class JobsComponent {

  constructor(private dialog: MatDialog) { }

  public jobsPortal(event: any) {
    console.log('event', event);
    this.dialog.open(PopupJobsComponent,{
      width:"400px"
    });

  }
}
