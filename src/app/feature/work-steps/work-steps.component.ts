import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-work-steps',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work-steps.component.html',
  styleUrl: './work-steps.component.scss',
})
export class WorkStepsComponent {
  steps = [
    { title: 'Úvod', description: 'Zjišťujeme vaše cíle...', icon: '🤝' },
    { title: 'Průzkum', description: 'Analyzujeme konkurenci...', icon: '🔍' },
    { title: 'Koncept', description: 'Navrhujeme obsah...', icon: '💡' },
    { title: 'Návrh', description: 'Připravujeme moderní...', icon: '✏️' },
    { title: 'Vývoj', description: 'Programujeme a...', icon: '💻' },
    { title: 'Náhled', description: 'Skládáme první verzi...', icon: '📄' },
    { title: 'Testování', description: 'Testujeme výkon...', icon: '🧪' },
    { title: 'Spuštění', description: 'Spouštíme projekt...', icon: '🚀' },
  ];

  getStepClass(index: number): string {
    return `step-${index}`;
  }
}
