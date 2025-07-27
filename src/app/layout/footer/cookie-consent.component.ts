import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalyticsService } from '../../services/analytics.service';

@Component({
  selector: 'app-cookie-consent',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cookie-consent.component.html',
  styleUrls: ['./cookie-consent.component.scss'],
})
export class CookieConsentComponent implements OnInit {
  showBanner = false;
  private analyticsService = inject(AnalyticsService);

  ngOnInit() {
    this.checkCookieConsent();
  }

  private checkCookieConsent() {
    const consent = localStorage.getItem('cookieConsent');
    this.showBanner = !consent;

    // Load GTM if previously accepted
    if (consent === 'accepted') {
      this.analyticsService.loadGoogleTagManager();
      this.analyticsService.updateConsentStatus(true, true);
    } else if (consent === 'required-only') {
      // Load GTM but with limited consent
      this.analyticsService.loadGoogleTagManager();
      this.analyticsService.updateConsentStatus(false, false);
    }
  }

  acceptAllCookies() {
    localStorage.setItem('cookieConsent', 'accepted');
    localStorage.setItem(
      'cookiePreferences',
      JSON.stringify({
        necessary: true,
        analytics: true,
        marketing: true,
      })
    );
    this.analyticsService.loadGoogleTagManager();
    this.analyticsService.updateConsentStatus(true, true);
    this.showBanner = false;
  }

  rejectCookies() {
    localStorage.setItem('cookieConsent', 'rejected');
    localStorage.setItem(
      'cookiePreferences',
      JSON.stringify({
        necessary: true,
        analytics: false,
        marketing: false,
      })
    );
    this.analyticsService.removeAnalytics();
    this.showBanner = false;
  }

  manageCookies() {
    // Accept only required/necessary cookies
    localStorage.setItem('cookieConsent', 'required-only');
    localStorage.setItem(
      'cookiePreferences',
      JSON.stringify({
        necessary: true,
        analytics: false,
        marketing: false,
      })
    );
    this.analyticsService.loadGoogleTagManager();
    this.analyticsService.updateConsentStatus(false, false);
    this.showBanner = false;
  }
}
