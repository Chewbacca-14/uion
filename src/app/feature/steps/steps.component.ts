import {AfterViewInit, Component, ElementRef, HostListener, ViewChild} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-steps',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './steps.component.html',
  styleUrl: './steps.component.scss'
})
export class StepsComponent implements AfterViewInit {
  @ViewChild('svgConnector', {static: false}) svgRef!: ElementRef<SVGSVGElement>;
  @ViewChild('grid', {static: false}) gridRef!: ElementRef<HTMLDivElement>;

  stepsCount = 8;
  stepSize = 72;
  arcRadius = 75.3;

  ngAfterViewInit(): void {
    this.drawZigzag();
  }

  @HostListener('window:resize')
  onResize(): void {
    this.drawZigzag();
  }

  private drawZigzag(): void {
    const perRow = this.getPerRow();
    const svg = this.svgRef.nativeElement;

    const windowWidth = window.innerWidth;

    let direction = 1;
    let x = 70;
    let y = 35;
    let gap = 400;

    if (windowWidth > 1600) {
      gap = 400
    }else if (windowWidth > 1400) {
      gap = 300
    } else if (windowWidth > 1200) {
      gap = 200
    } else if (windowWidth > 992) {
      gap = 150
    } else if (windowWidth > 576) {
      gap = 100
    } else if (windowWidth > 480) {
      gap = 60
    }

    const rows = Math.ceil(this.stepsCount / perRow);
    const totalWidth = perRow * this.stepSize + (perRow - 1) * gap;
    const totalHeight = rows * this.stepSize + (rows - 1) * gap;

    svg.setAttribute('width', `${totalWidth + 100}`);
    svg.setAttribute('height', `${totalHeight + 100}`);

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    let d = '';


    d += `M ${x},${y} `;

    for (let row = 0; row < rows; row++) {
      const isLastRow = row === rows - 1;
      const startX = direction === 1 ? x : x + (perRow - 1) * (this.stepSize + gap);
      const nextX = direction === 1 ? startX - this.stepSize : this.stepSize + (perRow - 1) * (this.stepSize + gap);
      const endX = direction === 1 ? startX + ((perRow - 1) * (this.stepSize + gap) + this.stepSize) : x;

      if (isLastRow) {
        const remainingSteps = this.stepsCount - (row * perRow);
        const lastStepX = direction === 1 
          ? startX + ((remainingSteps - 1) * (this.stepSize + gap))
          : startX - ((remainingSteps - 1) * (this.stepSize + gap));
        d += `L ${lastStepX},${y} `;
      } else {
        d += `L ${endX},${y} `;
      }

      if (!isLastRow) {
        d += `M ${endX},${y} `;

        y += this.arcRadius * 2;

        const arcDir = direction === 1 ? 1 : 0;
        d += `A ${this.arcRadius} ${this.arcRadius} 0 0 ${arcDir} ${endX} ${y} `;

        d += `L ${nextX} ${y} `;
        d += `M ${nextX},${y} `;

        y += this.arcRadius * 2;

        d += `A ${this.arcRadius} ${this.arcRadius} 0 0 ${arcDir === 1 ? 0 : 1} ${nextX} ${y} `;
      }
    }

    path.setAttribute('d', d);
    path.setAttribute('stroke', '#3fa9f5');
    path.setAttribute('stroke-width', '4');
    path.setAttribute('fill', 'none');

    svg.innerHTML = '';
    svg.appendChild(path);
  }

  private getPerRow(): number {
    const children = Array.from(this.gridRef.nativeElement.children);
    if (children.length < 2) return 1;

    const top = (children[0] as HTMLElement).offsetTop;
    let count = 1;
    for (let i = 1; i < children.length; i++) {
      if ((children[i] as HTMLElement).offsetTop !== top) break;
      count++;
    }
    return count;
  }
}