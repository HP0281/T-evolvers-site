import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class CookieConsentService {

  private consentCookieName = 'cookieConsent';

  constructor(private cookieService: CookieService) { }

  setConsent(consent: boolean): void {
    this.cookieService.set(this.consentCookieName, String(consent), 1);
  }

  getConsent(): boolean {
    return this.cookieService.get(this.consentCookieName) === 'true';
  }

  hasConsent(): boolean {
    return this.cookieService.check(this.consentCookieName);
  }



}
