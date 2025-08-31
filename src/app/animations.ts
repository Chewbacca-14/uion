// animations.ts
import { animate, style, transition, trigger } from '@angular/animations';

export const fadeInUp = trigger('fadeInUp', [
  transition(':enter', [ // triggers when element is added to DOM
    style({ opacity: 0, transform: 'translateY(50px)' }),
    animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
  ]),
]);
