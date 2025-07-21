import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-us-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-us-card.component.html',
  styleUrls: ['./about-us-card.component.scss'],
})
export class AboutUsCardComponent {
  @Input() imageUrl!: string;
  @Input() nameSurname!: string;
  @Input() description!: string;
  @Input() position!: string;
}
