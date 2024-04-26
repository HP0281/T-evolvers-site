import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-simple',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './card-simple.component.html',
  styleUrl: './card-simple.component.scss'
})
export class CardSimpleComponent {

  @Input() icon = "" ;
  @Input() title = "";
  @Input() description = "";
  @Input() backgroundImage = true;
  @Input() path="";

  constructor(private router:Router){

  }

  public redirect(){
    if(this.path != ""){
      this.router.navigate([this.path]);
    }
  }
}
