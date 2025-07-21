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
      icon: '/assets/icons/mobile.png',
      title: 'Mobilní aplikace',
      description:
        'Tvoříme rychlé a spolehlivé mobilní aplikace pro iOS i Android pomocí Flutteru',
    },
    {
      icon: '/assets/icons/internet.png',
      title: 'Webové stránky',
      description:
        'Navrhujeme moderní, přehledné a responzivní webové stránky přesně podle potřeb vašeho projektu',
    },
    {
      icon: '/assets/icons/coding.png',
      title: 'Webové aplikace',
      description:
        'Vyvíjíme chytré webové aplikace, které zefektivní vaše podnikání a ušetří čas',
    },
    {
      icon: '/assets/icons/design.png',
      title: 'UI/UX',
      description:
        'Vytváříme design, který potěší oko i uživatele – funkční, intuitivní a estetický',
    },
    {
      icon: '/assets/icons/website.png',
      title: 'Landing Page',
      description:
        'Optimalizované vstupní stránky, které zaujmou, vysvětlí a zvýší vaše konverze',
    },
    {
      icon: '/assets/icons/interview.png',
      title: 'Konzultace',
      description:
        'Pomůžeme vám najít ideální digitální řešení a strategii pro růst vašeho projektu',
    },
  ];
}
