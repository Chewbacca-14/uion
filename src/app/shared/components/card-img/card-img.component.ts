import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-img',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-img.component.html',
  styleUrl: './card-img.component.scss',
})
export class CardImgComponent {
  @Input() iconSrc: string | undefined;
  @Input() iconAlt: string | undefined;
}
