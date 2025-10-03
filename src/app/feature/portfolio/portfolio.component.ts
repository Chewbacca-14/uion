import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioProjectComponent } from '../../shared/components/portfolio-project/portfolio-project.component';

interface PortfolioProject {
  image: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, PortfolioProjectComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
  projects: PortfolioProject[] = [
    {
      image: 'https://help.generationesports.com/hc/article_attachments/360095197772',
      title: 'Valorant Test Project',
      description: 'Game development project focused on creating a competitive FPS experience.',
    },
     {
      image: 'https://help.generationesports.com/hc/article_attachments/360095197772',
      title: 'Valorant Test Project',
      description: 'Game development project focused on creating a competitive FPS experience.',
    },
    {
      image: 'https://help.generationesports.com/hc/article_attachments/360095197772',
      title: 'Valorant Test Project',
      description: 'Game development project focused on creating a competitive FPS experience.',
    },
    {
      image: 'https://help.generationesports.com/hc/article_attachments/360095197772',
      title: 'Valorant Test Project',
      description: 'Game development project focused on creating a competitive FPS experience.',
    },
     {
      image: 'https://help.generationesports.com/hc/article_attachments/360095197772',
      title: 'Valorant Test Project',
      description: 'Game development project focused on creating a competitive FPS experience.',
    },
    {
      image: 'https://help.generationesports.com/hc/article_attachments/360095197772',
      title: 'Valorant Test Project',
      description: 'Game development project focused on creating a competitive FPS experience.',
    },
  ];
}
