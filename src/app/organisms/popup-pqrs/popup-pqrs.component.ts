import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';

@Component({
  selector: 'app-popup-pqrs',
  standalone: true,
  imports: [MatDialogActions,MatDialogClose,MatDialogContent,MatDialogTitle,MatButtonModule],
  templateUrl: './popup-pqrs.component.html',
  styleUrl: './popup-pqrs.component.scss'
})
export class PopupPqrsComponent {

}
