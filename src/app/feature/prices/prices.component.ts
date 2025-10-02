import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface PriceCard {
  title: string;
  price: string;
  period: string;
  features: string[];
  highlighted?: boolean;
  buttonText: string;
}

@Component({
  selector: 'app-prices',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './prices.component.html',
  styleUrl: './prices.component.scss',
})
export class PricesComponent {
  priceCards: PriceCard[] = [
    {
      title: 'Basic',
      price: 'od 50 000 Kč',
      period: 'Ideální pro malý nápad nebo první MVP',
      features: [
        'MVP mobilní aplikace',
        'Responzivní design',
        'Kontaktní formulář',
        '3 měsíce technická podpora',
        'Google Play a App Store publikace',
      ],
      buttonText: 'Začít projekt',
    },
    {
      title: 'Professional',
      price: 'od 100 000 Kč',
      period: 'Pro rozvoj projektu s landing page a základní SEO',
      features: [
        'Všechno z Basic',
        'Landing page',
        'Doména a hosting',
        'Základní SEO optimalizace',
        'Integrace s Google Analytics',
        '6 měsíců technická podpora',
      ],
      highlighted: true,
      buttonText: 'Nejpopulárnější',
    },
    {
      title: 'Enterprise',
      price: 'Na míru',
      period: 'Pro komplexní řešení na míru a rozšířené funkce',
      features: [
        'Komplexní mobilní aplikace na míru',
        'Neomezený počet stránek',
        'Pokročilé SEO a marketingové integrace',
        'Vlastní funkcionalita a integrace',
        'Mobilní aplikace a e-commerce řešení',
        'Dedikovaný projektový manažer',
        '12 měsíců technická podpora',
      ],
      buttonText: 'Kontaktovat nás',
    },
  ];
}
