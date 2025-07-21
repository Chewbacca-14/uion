import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-bubble',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-bubble.component.html',
  styleUrl: './contact-bubble.component.scss',
})
export class ContactBubbleComponent {
  @Input() bgColor: string = '';
  @Input() icon: string = '';
}
