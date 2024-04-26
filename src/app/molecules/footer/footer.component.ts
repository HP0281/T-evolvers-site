import { Component, OnInit } from '@angular/core';
import { TextContainerComponent } from '../../atoms/text-container/text-container.component';
import { NavigationEnd, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TextContainerComponent, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {

  public url='/';

  constructor(private router: Router) { }

ngOnInit(): void {
    
    this.router.events.subscribe(event => {
      this.url = this.router.url;
      if (event instanceof NavigationEnd) {
         window.scrollTo(0, 0); 
      }
    });
  }
}
