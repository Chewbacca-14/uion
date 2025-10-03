import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-portfolio-project',
  standalone: true,
  imports: [],
  templateUrl: './portfolio-project.component.html',
  styleUrl: './portfolio-project.component.scss'
})
export class PortfolioProjectComponent {
  @Input() image!: string;
  @Input() title!: string;
  @Input() description!: string;
}
