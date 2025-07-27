import { Injectable } from '@angular/core';

declare let gtag: Function;
declare let dataLayer: any[];

@Injectable({
  providedIn: 'root',
})
export class AnalyticsService {
  private isLoaded = false;
  private gtmId = 'GTM-5CNT3JFJ';

  loadGoogleTagManager() {
    if (this.isLoaded) return;

    // Initialize dataLayer
    (window as any).dataLayer = (window as any).dataLayer || [];

    // Load GTM script
    const gtmScript = document.createElement('script');
    gtmScript.innerHTML = `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','${this.gtmId}');
    `;
    document.head.appendChild(gtmScript);

    // Add noscript iframe
    const noscript = document.createElement('noscript');
    noscript.innerHTML = `
      <iframe src="https://www.googletagmanager.com/ns.html?id=${this.gtmId}"
      height="0" width="0" style="display:none;visibility:hidden"></iframe>
    `;
    document.body.insertBefore(noscript, document.body.firstChild);

    this.isLoaded = true;
  }

  removeAnalytics() {
    // Remove GTM scripts
    const scripts = document.querySelectorAll(
      'script[src*="googletagmanager"]'
    );
    scripts.forEach((script) => script.remove());

    // Remove noscript iframe
    const noscripts = document.querySelectorAll(
      'noscript iframe[src*="googletagmanager"]'
    );
    noscripts.forEach((noscript) => noscript.parentElement?.remove());

    // Clear GTM cookies
    this.clearGTMCookies();
    this.isLoaded = false;
  }

  private clearGTMCookies() {
    const cookies = document.cookie.split(';');
    cookies.forEach((cookie) => {
      const eqPos = cookie.indexOf('=');
      const name = eqPos > -1 ? cookie.substr(0, eqPos).trim() : cookie.trim();
      if (
        name.startsWith('_ga') ||
        name.startsWith('_gid') ||
        name.startsWith('_gtm')
      ) {
        document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
        document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=.${window.location.hostname}`;
      }
    });
  }

  // Push consent status to GTM
  updateConsentStatus(analyticsConsent: boolean, marketingConsent: boolean) {
    if ((window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: 'consent_update',
        analytics_consent: analyticsConsent,
        marketing_consent: marketingConsent,
      });
    }
  }

  trackEvent(eventName: string, parameters?: any) {
    if ((window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: eventName,
        ...parameters,
      });
    }
  }
}
