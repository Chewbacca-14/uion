import { Component } from '@angular/core';
import { AboutUsCardComponent } from '../../shared/components/about-us-card/about-us-card.component';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [AboutUsCardComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss',
})
export class AboutUsComponent {}
