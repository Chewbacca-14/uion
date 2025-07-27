import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CookieConsentComponent } from './cookie-consent.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, CookieConsentComponent],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  goToContact() {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
