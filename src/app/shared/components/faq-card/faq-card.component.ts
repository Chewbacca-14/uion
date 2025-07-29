import { Component, Input, Output, EventEmitter } from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-faq-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq-card.component.html',
  styleUrl: './faq-card.component.scss'
})
export class FaqCardComponent {
 @Input() question: string = '';
 @Input() answer: string = '';
 @Input() showBottomBorder: boolean = false;
 @Input() isExpanded: boolean = false;
 @Output() toggle = new EventEmitter<void>();

  onToggle() {
    this.toggle.emit();
  }
}

