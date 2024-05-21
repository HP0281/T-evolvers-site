import { Component, OnInit } from '@angular/core';
import { CookieConsentService } from '../../services/cookie/cookie.service';
import { MatDialogClose } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-cookie-popup',
  standalone: true,
  imports: [MatButtonModule,MatDialogClose],
  templateUrl: './cookie-popup.component.html',
  styleUrl: './cookie-popup.component.scss'
})
export class CookiePopupComponent implements OnInit {

  showConsent: boolean = false;

  constructor(private cookieConsentService: CookieConsentService) { }

  ngOnInit(): void {
    this.showConsent = !this.cookieConsentService.hasConsent();
  }

  acceptCookies(): void {
    this.cookieConsentService.setConsent(true);
    this.showConsent = false;
  }

}
