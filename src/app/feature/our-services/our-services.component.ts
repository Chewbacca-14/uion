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
      icon: '/assets/icons/website.png',
      title: 'Landing Page',
      description:
        'Optimalizované vstupní stránky, které zaujmou návštěvníky, jasně komunikují hodnotu a zvýší vaše konverze.',
    },
    {
      icon: '/assets/icons/mobile.png',
      title: 'Mobilní a webové aplikace',
      description:
        'Vyvíjíme rychlé a spolehlivé mobilní aplikace pro iOS i Android pomocí Flutteru i moderní webové aplikace, které posouvají vaše podnikání vpřed.',
    },
    {
      icon: '/assets/icons/internet.png',
      title: 'Webové stránky',
      description:
        'Navrhujeme moderní, přehledné a responzivní webové stránky šité na míru vašim potřebám a cílové skupině.',
    },
    {
      icon: '/assets/icons/design.png',
      title: 'UI/UX a Branding',
      description:
        'Vytváříme design, který zaujme a usnadní používání – funkční, intuitivní a vizuálně atraktivní, podporující vaši značku.',
    },
  ];

  goToWhyChooseUs() {
    const whyChooseUsSection = document.getElementById('why-us');
    if (whyChooseUsSection) {
      whyChooseUsSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
