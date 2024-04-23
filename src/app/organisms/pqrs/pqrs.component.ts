import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';

@Component({
  selector: 'app-pqrs',
  standalone: true,
  imports: [MatFormFieldModule,MatInputModule,ReactiveFormsModule,MatSelectModule,MatButtonModule],
  templateUrl: './pqrs.component.html',
  styleUrl: './pqrs.component.scss'
})
export class PqrsComponent {

  public pqrsForm = this.fb.group({
    name:["",Validators.required],
    phone:["",Validators.required],
    email:["",[Validators.required,Validators.email]],
    company:[""],
    city:["",Validators.required],
    interests:["",Validators.required],
    message:["",[Validators.required, Validators.maxLength(256)]]


  });

  constructor(private fb:FormBuilder){

  }


  public sendPQRS(){
    if(this.pqrsForm.valid){
      console.log('sendPqrs',this.pqrsForm.value);
    }else{
      console.log('sendPqrs with error',this.pqrsForm.value);
      
    }

    
  }

}
