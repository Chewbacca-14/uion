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
      image: '/assets/projects/1.jpg',
      title: 'Papi Burgers',
      description:
        'Mobilní aplikace pro síť restaurací, ve které se kombinuje aplikace hned pro 3 podniky.',
    },
    {
      image: '/assets/projects/2.jpg',
      title: 'EasyPGP',
      description:
        'Mobilní aplikace pro Android a iOS pro práci s kryptografií – dešifrování zpráv pomocí PGP klíče.',
    },
    {
      image: '/assets/projects/3.jpg',
      title: 'OnlyCalendar',
      description:
        'Telegram mini app pro plánování meetingů v Teams, Zoomu, Google Meet apod.',
    },
    {
      image: '/assets/projects/4.jpg',
      title: 'NullEnd Browser',
      description:
        'Mobilní zabezpečený prohlížeč pro Android a iOS, který kombinuje funkce známých prohlížečů a zároveň nabízí vlastní unikátní možnosti.',
    },
  ];
}
