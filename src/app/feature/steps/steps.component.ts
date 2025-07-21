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
export class StepsComponent  implements AfterViewInit {
  @ViewChild('svgConnector', { static: false }) svgRef!: ElementRef<SVGSVGElement>;
  @ViewChild('grid', { static: false }) gridRef!: ElementRef<HTMLDivElement>;

  stepsCount = 9;
  stepSize = 70;
  gap = 200;
  arcRadius = 68;

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
    const rows = Math.ceil(this.stepsCount / perRow);
    const totalWidth = perRow * this.stepSize + (perRow - 1) * this.gap;
    const totalHeight = rows * this.stepSize + (rows - 1) * this.gap;

    svg.setAttribute('width', `${totalWidth + 100}`);
    svg.setAttribute('height', `${totalHeight + 100}`);

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    let d = '';

    let direction = 1;
    let x = 35;
    let y = 35;

    d += `M ${x},${y} `;

    for (let row = 0; row < rows; row++) {
      const isLastRow = row === rows - 1;
      const startX = direction === 1 ? 35 : 35 + (perRow - 1) * (this.stepSize + this.gap);
      const nextX = direction === 1 ? startX - this.stepSize : 50 + (perRow - 1) * (this.stepSize + this.gap);
      const endX = direction === 1 ? startX + (perRow - 1) * (this.stepSize + this.gap) + this.stepSize : 35;

      if (isLastRow) {
        if (perRow === 2) {
          d += `L ${startX},${y} `;
        } else {
          d += `L ${endX - this.stepSize},${y} `;
        }
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
