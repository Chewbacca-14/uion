import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-logos-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './logos-carousel.component.html',
  styleUrl: './logos-carousel.component.scss',
})
export class LogosCarouselComponent {
  logos = [
    {
      image: './assets/logos/comiccon.png',
      alt: 'ComicCon',
    },
    {
      image: './assets/logos/fruitisimo.png',
      alt: 'Fruitisimo',
    },
    {
      image: './assets/logos/grouthclub.png',
      alt: 'Growth Club',
    },
    {
      image: './assets/logos/rd.png',
      alt: 'RD',
    },
    {
      image: './assets/logos/dino.png',
      alt: 'DinoLive',
    },
    {
      image: './assets/logos/ATeam.png',
      alt: 'ATeam',
    },
    {
      image: './assets/logos/Bumbej.png',
      alt: 'Bumbej',
    },
  ];

  // Duplicate logos for seamless infinite scroll
  get duplicatedLogos() {
    return [...this.logos, ...this.logos];
  }
}
