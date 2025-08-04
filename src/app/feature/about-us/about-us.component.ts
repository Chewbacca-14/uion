import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { AboutUsCardComponent } from '../../shared/components/about-us-card/about-us-card.component';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [AboutUsCardComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss',
})
export class AboutUsComponent implements AfterViewInit {
  @ViewChild('cardGrid', { static: true })
  cardGrid!: ElementRef<HTMLDivElement>;

  private isDragging = false;
  private startX = 0;
  private startScrollLeft = 0;

  ngAfterViewInit(): void {
    window.addEventListener('resize', () => this.updateCardWidth());
  }

  private updateCardWidth(): void {
    // Remove this method as we'll use dynamic calculation
  }

  scrollLeft(): void {
    const container = this.cardGrid.nativeElement;
    const scrollAmount = container.clientWidth * 0.8; // Scroll 80% of visible width
    container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  }

  scrollRight(): void {
    const container = this.cardGrid.nativeElement;
    const scrollAmount = container.clientWidth * 0.8; // Scroll 80% of visible width
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  }

  onDragStart(event: MouseEvent): void {
    this.isDragging = true;
    const container = this.cardGrid.nativeElement;
    this.startX = event.pageX - container.offsetLeft;
    this.startScrollLeft = container.scrollLeft;
    event.preventDefault();
  }

  onDragMove(event: MouseEvent): void {
    if (!this.isDragging) return;
    event.preventDefault();
    const container = this.cardGrid.nativeElement;
    const x = event.pageX - container.offsetLeft;
    const walk = (x - this.startX) * 2;
    container.scrollLeft = this.startScrollLeft - walk;
  }

  onDragEnd(): void {
    this.isDragging = false;
  }

  onTouchStart(event: TouchEvent): void {
    const container = this.cardGrid.nativeElement;
    this.startX = event.touches[0].pageX - container.offsetLeft;
    this.startScrollLeft = container.scrollLeft;
  }

  onTouchMove(event: TouchEvent): void {
    const container = this.cardGrid.nativeElement;
    const x = event.touches[0].pageX - container.offsetLeft;
    const walk = (x - this.startX) * 1.5;
    container.scrollLeft = this.startScrollLeft - walk;
  }

  onTouchEnd(): void {
    // Touch end handling if needed
  }
}
