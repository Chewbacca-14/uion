import {
  Component,
  ViewChild,
  ElementRef,
  AfterViewInit,
  HostListener,
} from '@angular/core';
import { AboutUsCardComponent } from '../../shared/components/about-us-card/about-us-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [AboutUsCardComponent, CommonModule],
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent implements AfterViewInit {
  @ViewChild('cardGrid', { static: false })
  cardGrid!: ElementRef<HTMLDivElement>;

  currentIndex = 0;
  totalCards = 2;

  isMobile = false;

  ngAfterViewInit(): void {
    this.checkScreenSize();
  }

  @HostListener('window:resize')
  onResize() {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isMobile = window.innerWidth <= 768;
    this.updateCarouselPosition();
  }

  nextCard() {
    if (this.currentIndex < this.totalCards - 1) {
      this.currentIndex++;
      this.updateCarouselPosition();
    }
  }

  previousCard() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.updateCarouselPosition();
    }
  }

  private updateCarouselPosition() {
    if (this.isMobile && this.cardGrid) {
      const cardWidth = this.cardGrid.nativeElement.offsetWidth;
      const translateX = -this.currentIndex * cardWidth;
      this.cardGrid.nativeElement.style.transform = `translateX(${translateX}px)`;
    }
  }
}
