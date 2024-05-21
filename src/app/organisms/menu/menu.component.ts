import { CommonModule, DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { NavigationEnd, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MatMenuModule, MatIconModule, RouterModule,CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit, AfterViewInit {

  public url='/';
  @ViewChild('serviceTrigger') serviceTrigger!:MatMenuTrigger;

  constructor(private router: Router,
    @Inject(DOCUMENT) private document: any) { }
  
    ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      this.url = this.router.url;
      console.log('routerUrl',this.router.url);
      
      if (event instanceof NavigationEnd) {
        const fragment = this.router.parseUrl(this.url).fragment;
        if (fragment) {
          const element = this.document.querySelector(`#${fragment}`);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    });
  }

  public isActiveRoute(route:string){
    return this.url.includes(route);
  }

  public openMenuServices(){
    this.serviceTrigger.openMenu();
  }
  public closeMenuServices(){
    this.serviceTrigger.closeMenu();
  }
}





