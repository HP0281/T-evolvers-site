import { AfterContentInit, Component, ElementRef, ViewChild } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { CardSimpleComponent } from './atoms/card-simple/card-simple.component';
import { CardWeComponent } from './atoms/card-we/card-we.component';
import { CardBannerComponent } from './molecules/card-banner/card-banner.component';
import { FooterComponent } from './molecules/footer/footer.component';
import { CardInfoComponent } from './molecules/card-info/card-info.component';
import { MenuComponent } from './organisms/menu/menu.component';
import { PqrsComponent } from './organisms/pqrs/pqrs.component';
import { HttpClientModule } from '@angular/common/http';
import { filter } from 'rxjs';
import { CookiePopupComponent } from './organisms/cookie-popup/cookie-popup.component';
import { MatDialog } from '@angular/material/dialog';
import { CookieConsentService } from './services/cookie/cookie.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardSimpleComponent, CardWeComponent,
    CardBannerComponent, FooterComponent, CardInfoComponent, CardBannerComponent,
    MenuComponent, PqrsComponent, CookiePopupComponent,
    HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterContentInit {
  @ViewChild('contactanos') element!: ElementRef;
  title = 'T-Evolvers';
  constructor(
    private dialog: MatDialog,
    private cookieConsentService: CookieConsentService,
    private router: Router) {

  }
  ngAfterContentInit(): void {
  }

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      const tree = this.router.parseUrl(this.router.url);
      if (tree.fragment) {
        const element = document.getElementById(tree.fragment);
        if (this.router.url.includes('contactanos')) {
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      }
    });

    if (!this.cookieConsentService.hasConsent()) {
      this.openCookieDialog();
    }
  }

  public openCookieDialog(): void {
    this.dialog.open(CookiePopupComponent, {
      width: '380px',
      disableClose: true
    });
  }
}
