import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhyUsCardComponent } from '../../shared/components/why-us-card/why-us-card.component';

@Component({
  selector: 'app-why-choose-us',
  standalone: true,
  imports: [CommonModule, WhyUsCardComponent],
  templateUrl: './why-choose-us.component.html',
  styleUrl: './why-choose-us.component.scss',
})
export class WhyChooseUsComponent {
  cards = [
  {
    icon: '/assets/icons/dollar-sign.svg',
    title: 'Férové ceny',
    description: 'Nabízíme dostupná řešení s nízkými provozními náklady.',
  },
  {
    icon: '/assets/icons/message-circle.svg',
    title: 'Rychlá komunikace',
    description: 'Jsme v kontaktu, když nás potřebujete. Vaše požadavky řešíme okamžitě – bez zbytečných průtahů.',
  },
  {
    icon: '/assets/icons/settings.svg',
    title: 'Flexibilita',
    description: 'Přizpůsobíme se vašemu rozpočtu, cílům i termínům projektu.',
  },
  {
    icon: '/assets/icons/laptop.svg',
    title: 'Moderní technologie',
    description: 'Používáme nejnovější technologie a osvědčené postupy, abyste měli jistotu, že váš web bude fungovat i za roky.',
  },
  {
    icon: '/assets/icons/rockett.svg',
    title: 'Od nápadu po spuštění',
    description: 'Od prvního nápadu přes design a vývoj až po spuštění.',
  },
  {
    icon: '/assets/icons/users.svg',
    title: 'Odborné poradenství',
    description: 'Pomůžeme vám nastavit strategii, která přivede klienty a podpoří váš růst. Web je jen začátek.',
  },
];

}
