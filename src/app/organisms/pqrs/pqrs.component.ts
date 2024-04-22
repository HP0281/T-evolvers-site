import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';

@Component({
  selector: 'app-pqrs',
  standalone: true,
  imports: [MatFormFieldModule,MatInputModule,ReactiveFormsModule,MatSelectModule],
  templateUrl: './pqrs.component.html',
  styleUrl: './pqrs.component.scss'
})
export class PqrsComponent {

}
