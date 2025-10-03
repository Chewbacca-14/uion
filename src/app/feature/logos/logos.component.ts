import { Component } from '@angular/core';
import { LogosCarouselComponent } from '../../shared/components/logos-carousel/logos-carousel.component';

@Component({
  selector: 'app-logos',
  standalone: true,
  imports: [LogosCarouselComponent],
  templateUrl: './logos.component.html',
  styleUrl: './logos.component.scss'
})
export class LogosComponent {

}
