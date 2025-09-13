import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  ViewChild,
} from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-steps',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './steps.component.html',
  styleUrl: './steps.component.scss',
})
export class StepsComponent implements AfterViewInit {
  @ViewChild('svgConnector', { static: false })
  svgRef!: ElementRef<SVGSVGElement>;
  @ViewChild('grid', { static: false }) gridRef!: ElementRef<HTMLDivElement>;

  stepsCount = 8;
  stepSize = 85;
  arcRadius = 75.3;
  private edgeOvershoot = 400; // stays large; final rx is constrained dynamically

  ngAfterViewInit(): void {
    this.drawZigzag();
  }

  @HostListener('window:resize')
  onResize(): void {
    this.drawZigzag();
  }

  private drawZigzag(): void {
    const svg = this.svgRef.nativeElement;
    const gridEl = this.gridRef.nativeElement;
    const stepEls = Array.from(
      gridEl.querySelectorAll('.step')
    ) as HTMLElement[];
    if (!stepEls.length) return;

    const perRow = this.getPerRow();
    const rows = Math.ceil(stepEls.length / perRow);

    const gridRect = gridEl.getBoundingClientRect();
    svg.setAttribute('width', `${gridRect.width}`);
    svg.setAttribute('height', `${gridRect.height}`);
    svg.innerHTML = '';

    const centers = stepEls.map((el) => {
      const r = el.getBoundingClientRect();
      return {
        x: r.left - gridRect.left + r.width / 2,
        y: r.top - gridRect.top + r.height / 2,
      };
    });

    // serpentine order
    const order: number[] = [];
    for (let row = 0; row < rows; row++) {
      const start = row * perRow;
      const end = Math.min(start + perRow, stepEls.length);
      const indices = Array.from({ length: end - start }, (_, i) => start + i);
      if (row % 2 === 1) indices.reverse();
      order.push(...indices);
    }

    let d = `M ${centers[order[0]].x} ${centers[order[0]].y}`;

    for (let i = 1; i < order.length; i++) {
      const prevIdx = order[i - 1];
      const currIdx = order[i];
      const p1 = centers[prevIdx];
      const p2 = centers[currIdx];

      const rowPrev = Math.floor(prevIdx / perRow);
      const rowCurr = Math.floor(currIdx / perRow);

      if (rowPrev === rowCurr) {
        // same row: straight line
        d += ` L ${p2.x} ${p2.y}`;
      } else {
        // Enhanced pronounced half-circle turn
        const direction = rowPrev % 2 === 0 ? 1 : -1; // which side to bulge
        const deltaY = p2.y - p1.y;
        const ry = deltaY / 2; // vertical radius (fixed for a half-height)
        // Base expansion factor by viewport size (smaller screens -> smaller horizontal span)
        const vw = window.innerWidth;
        const expansion =
          vw < 480
            ? 0.65
            : vw < 640
            ? 0.8
            : vw < 768
            ? 1.0
            : vw < 1024
            ? 1.15
            : 1.3; // large screens: stronger arc
        let desiredRx = ry * expansion;

        // Limit by configured overshoot
        desiredRx = Math.min(desiredRx, this.edgeOvershoot);

        // Constrain so arc stays inside SVG width
        const safety = 6;
        if (direction === 1) {
          const spaceRight = gridRect.width - p1.x - safety;
          desiredRx = Math.min(desiredRx, spaceRight);
        } else {
          const spaceLeft = p1.x - safety;
          desiredRx = Math.min(desiredRx, spaceLeft);
        }

        // Ensure it's at least a semicircle (>= ry) for "strong" curve; clamp lower bound
        const rx = Math.max(ry, desiredRx);

        // Arc flags: largeArcFlag=0 (half), sweepFlag controls side
        const sweepFlag = direction === 1 ? 1 : 0;

        d += ` A ${rx} ${ry} 0 0 ${sweepFlag} ${p2.x} ${p2.y}`;
      }
    }

    // gradient (unchanged)
    const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    const gradient = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'linearGradient'
    );
    gradient.setAttribute('id', 'connectorGradient');
    gradient.setAttribute('x1', '0');
    gradient.setAttribute('y1', '0');
    gradient.setAttribute('x2', `${gridRect.width}`);
    gradient.setAttribute('y2', '0');
    gradient.setAttribute('gradientUnits', 'userSpaceOnUse');
    [
      { o: '0%', c: '#00c86b9a' },
      { o: '50%', c: '#00c86b9a' },
      { o: '100%', c: '#00c86b9a' },
    ].forEach((s) => {
      const stop = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'stop'
      );
      stop.setAttribute('offset', s.o);
      stop.setAttribute('stop-color', s.c);
      gradient.appendChild(stop);
    });
    defs.appendChild(gradient);

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', d);
    path.setAttribute('stroke', 'url(#connectorGradient)');
    path.setAttribute('stroke-width', '3');
    path.setAttribute('fill', 'none');
    path.setAttribute('stroke-linecap', 'round');
    path.setAttribute('stroke-linejoin', 'round');

    svg.appendChild(defs);
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
