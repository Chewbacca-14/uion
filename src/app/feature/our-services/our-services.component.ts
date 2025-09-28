import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../../shared/components/product-card/product-card.component';

@Component({
  selector: 'app-our-services',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './our-services.component.html',
  styleUrl: './our-services.component.scss',
})
export class OurServicesComponent {
  cards = [
    {
      icon: '/assets/icons/landingicon.png',
      title: 'Prodejní stránka (Landing Page)',
      description:
        'Vytvoříme vstupní stránku, která okamžitě zaujme, jasně ukáže vaši hodnotu a přivede návštěvníky k akci. Každý klik = blíž k vašemu cíli.',
    },
    {
      icon: '/assets/icons/mobileappicon.png',
      title: 'Mobilní a webové aplikace',
      description:
        'Vyvíjíme rychlé a spolehlivé aplikace pro iOS, Android i web. Moderní technologie, chytrý design a výkon, který vám otevírá nové příležitosti.',
    },
    {
      icon: '/assets/icons/website_icon.png',
      title: 'Web, který prodává',
      description:
        'Navrhujeme moderní a responzivní weby, které budují důvěru, vedou k akci a přivádějí nové klienty',
    },
    {
      icon: '/assets/icons/uiuxicon.png',
      title: 'UI/UX a Branding',
      description:
        'Spojujeme estetiku a funkčnost. Intuitivní uživatelské prostředí a silný vizuální styl, který z vaší značky udělá zapamatovatelný zážitek.',
    },
  ];

  goToWhyChooseUs() {
    const whyChooseUsSection = document.getElementById('why-us');
    if (whyChooseUsSection) {
      whyChooseUsSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
