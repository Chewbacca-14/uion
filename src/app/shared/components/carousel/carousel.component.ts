import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent {
  technologiesFirstRow = [
    {
      name: 'Flutter',
      iconSrc: '/assets/svg/flutter.svg',
      iconAlt: 'Flutter logo',
    },
    {
      name: 'Dart',
      iconSrc: '/assets/svg/dart.svg',
      iconAlt: 'Dart logo',
    },
    {
      name: 'Angular',
      iconSrc: '/assets/svg/angular.svg',
      iconAlt: 'Angular logo',
    },
    {
      name: 'Javascript',
      iconSrc: '/assets/svg/javascript.svg',
      iconAlt: 'Javascript logo',
    },
    {
      name: 'Kotlin',
      iconSrc: '/assets/svg/kotlin.svg',
      iconAlt: 'Kotlin logo',
    },
  ];

  technologiesSecondRow = [
    {
      name: 'Java',
      iconSrc: '/assets/svg/java.svg',
      iconAlt: 'Java logo',
    },
    {
      name: 'SpringBoot',
      iconSrc: '/assets/svg/spring-boot.svg',
      iconAlt: 'SpringBoot logo',
    },
    {
      name: 'AppWrite',
      iconSrc: '/assets/svg/appwrite.svg',
      iconAlt: 'AppWrite logo',
    },
    {
      name: 'Firebase',
      iconSrc: '/assets/svg/firebase.svg',
      iconAlt: 'Firebase logo',
    },
    {
      name: 'Figma',
      iconSrc: '/assets/svg/figma.svg',
      iconAlt: 'Figma logo',
    },
  ];
}
