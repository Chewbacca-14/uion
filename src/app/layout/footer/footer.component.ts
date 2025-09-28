import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CookieConsentComponent } from './cookie-consent.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, CookieConsentComponent],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  menuOpen = false;

  constructor(private readonly router: Router) {}

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  goToContact() {
    this.menuOpen = false;

    if (this.router.url === '/' || this.router.url.startsWith('/#')) {
      // already on root → just change hash
      window.location.hash = 'contact';
    } else {
      // navigate to root and set fragment
      this.router.navigate(['/'], { fragment: 'contact' });
    }
  }
}
