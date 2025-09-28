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
      name: 'JavaScript',
      iconSrc: '/assets/svg/javascript.svg',
      iconAlt: 'JavaScript logo',
    },
    {
      name: 'TypeScript',
      iconSrc: '/assets/svg/typescript.svg',
      iconAlt: 'TypeScript logo',
    },
    {
      name: 'NodeJS',
      iconSrc: '/assets/svg/nodejs.svg',
      iconAlt: 'NodeJS logo',
    },
    {
      name: 'ReactJS',
      iconSrc: '/assets/svg/reactjs.svg',
      iconAlt: 'ReactJS logo',
    },
    {
      name: 'Tailwind CSS',
      iconSrc: '/assets/svg/tailwindcss.svg',
      iconAlt: 'Tailwind CSS logo',
    },
    {
      name: 'Contentful',
      iconSrc: '/assets/svg/contentful.svg',
      iconAlt: 'Contentful logo',
    },
    {
      name: 'Kotlin',
      iconSrc: '/assets/svg/kotlin.svg',
      iconAlt: 'Kotlin logo',
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
