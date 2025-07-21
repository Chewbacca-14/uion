import {AfterViewInit, Component, OnInit} from '@angular/core';
import {MatStepper, MatStepperModule} from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stepper',
  standalone: true,
  imports: [CommonModule, MatStepperModule, MatButtonModule],
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
})
export class StepperComponent implements AfterViewInit{
  steps = [
    { label: 'Konzultace a analýza', content: 'Každý projekt je pro nás příběhem, který tvoříme krok za krokem...' },
    { label: 'Návrh řešení', content: 'Navrhneme řešení na míru vašim potřebám a možnostem.' },
    { label: 'Realizace projektu', content: 'Přeneseme návrh do reality pomocí moderních technologií.' },
    { label: 'Testování a ladění', content: 'Pečlivě testujeme každý krok, aby vše fungovalo bezchybně.' },
    { label: 'Dodání a podpora', content: 'Dokončený projekt předáme a zajišťujeme jeho další podporu.' },
  ];

  ngAfterViewInit(): void {
    const mouseTarget = document.querySelector(".matStepId") as HTMLElement;

    mouseTarget.addEventListener("mouseenter", (e) => {
      mouseTarget.style.color = "green";
    });

    mouseTarget.addEventListener("mouseleave", (e) => {
      mouseTarget.style.color = "black";
    });
  }

  onStepHover(stepper: MatStepper, index: number): void {
    console.log(stepper)
    stepper.selectedIndex = index;
  }
}
