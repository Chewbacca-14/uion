import { Component, OnInit, Inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cookie-consent',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cookie-consent.component.html',
  styleUrls: ['./cookie-consent.component.scss'],
})
export class CookieConsentComponent implements OnInit {
  consentGiven = false;
  showEdit = false;
  analyticsConsent = false;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit(): void {
    const consent = localStorage.getItem('cookie_consent');
    if (consent) {
      this.consentGiven = true;
      const parsed = JSON.parse(consent);
      if (parsed.analytics === true) {
        this.loadGoogleAnalytics();
      }
    }
  }

  acceptAll(): void {
    this.analyticsConsent = true;
    this.saveConsent();
    this.savePreferences();
  }

  savePreferences(): void {
    this.saveConsent();
    this.showEdit = false;
  }

  saveConsent(): void {
    const consentData = {
      analytics: this.analyticsConsent,
      necessary: true,
    };
    localStorage.setItem('cookie_consent', JSON.stringify(consentData));
    this.consentGiven = true;

    if (this.analyticsConsent) {
      this.loadGoogleAnalytics();
    }
  }

  loadGoogleAnalytics(): void {
    if (this.document.getElementById('ga-script')) return;

    const script1 = this.document.createElement('script');
    script1.id = 'ga-script';
    script1.src = 'https://www.googletagmanager.com/gtag/js?id=G-E8XZPTLJE0';
    script1.async = true;
    this.document.head.appendChild(script1);

    const script2 = this.document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-E8XZPTLJE0'); 
    `;
    this.document.head.appendChild(script2);
  }
}
