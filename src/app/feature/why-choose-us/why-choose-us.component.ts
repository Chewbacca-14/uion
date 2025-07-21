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
      title: 'Lepší ceny',
      description: 'Nízké provozní náklady = dostupnější řešení pro vás.',
    },
    {
      icon: '/assets/icons/message-circle.svg',
      title: 'Rychlá komunikace',
      description: 'Odpovídáme a řešíme požadavky bez zbytečných prodlev.',
    },
    {
      icon: '/assets/icons/settings.svg',
      title: 'Flexibilita',
      description: 'Přizpůsobíme se vašemu rozpočtu, cíli i termínu.',
    },
    {
      icon: '/assets/icons/laptop.svg',
      title: 'Moderní technologie',
      description: 'Používáme aktuální nástroje a ověřené vývojové postupy.',
    },
    {
      icon: '/assets/icons/rockett.svg',
      title: 'Od nápadu po spuštění',
      description:
        'Zvládneme celý proces – návrh, vývoj, testování i nasazení.',
    },
    {
      icon: '/assets/icons/users.svg',
      title: 'Odborné poradenství',
      description: 'Pomůžeme najít optimální řešení pro váš projekt.',
    },
  ];
}
