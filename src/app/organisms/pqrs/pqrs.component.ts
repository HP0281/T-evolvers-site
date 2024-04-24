import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { PqrsService } from '../../services/pqrs/pqrs.service';
import {
  MatDialog,
  MatDialogModule,
} from '@angular/material/dialog';
import { PopupPqrsComponent } from '../popup-pqrs/popup-pqrs.component';


@Component({
  selector: 'app-pqrs',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatSelectModule, MatButtonModule,
    MatDialogModule
  ],
  templateUrl: './pqrs.component.html',
  styleUrl: './pqrs.component.scss'
})
export class PqrsComponent {

  public pqrsForm = this.fb.group({
    name: ["", Validators.required],
    phone: ["", [Validators.required, Validators.maxLength(10),Validators.pattern(/^3\d{9}$/)]],
    email: ["", [Validators.required, Validators.email]],
    company: [""],
    city: ["", Validators.required],
    interests: ["", Validators.required],
    message: ["", [Validators.required, Validators.maxLength(256)]]


  });

  constructor(private fb: FormBuilder,
    private pqrsService: PqrsService,
    private dialog: MatDialog
  ) {

  }


  public sendPQRS() {
    
    if (this.pqrsForm.valid) {
      console.log('sendPqrs', this.pqrsForm.value);
      this.pqrsService.registerPQRS(this.pqrsForm.value).subscribe(
        (res) => {
          this.pqrsForm.reset();
          this.dialog.open(PopupPqrsComponent,{
            autoFocus:false,
            width:"350px"
          });
        }
      )
    } else {
      console.log('sendPqrs with error', this.pqrsForm.value);

    }


  }

}
