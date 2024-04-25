import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogClose } from '@angular/material/dialog';

@Component({
  selector: 'app-popup-jobs',
  standalone: true,
  imports: [MatButtonModule,MatDialogClose],
  templateUrl: './popup-jobs.component.html',
  styleUrl: './popup-jobs.component.scss'
})
export class PopupJobsComponent {

  public goJobsPortal(){
    window.open('https://www.magneto365.com/home/soy-empresa/','_blank');
  }

}
