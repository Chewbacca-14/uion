import { AfterViewInit, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements AfterViewInit {
  menuOpen = false;

  ngAfterViewInit(): void {
    const header = document.getElementById('site-header') as HTMLElement;
    let lastScrollY = 0;
    window.addEventListener(
      'scroll',
      (e: Event) => {
        const currentScrollY = (e.target as HTMLElement).scrollTop;

        if (currentScrollY > lastScrollY && currentScrollY > 1) {
          header.classList.add('shrink');
        } else if (currentScrollY < lastScrollY && currentScrollY > 1) {
          header.classList.remove('shrink');
        }

        if (window.location.hash) {
          history.replaceState(
            null,
            document.title,
            window.location.pathname + window.location.search
          );
        }

        lastScrollY = currentScrollY;
      },
      true
    );
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  onNavLinkClick() {
    this.menuOpen = false;
  }

  goToContact() {
    this.menuOpen = false;
    window.location.hash = 'contact';
  }

  scrollToTop() {
    const header = document.getElementById('site-header');
    const container = header ? this.getScrollContainer(header) : window;
    if (container === window) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    (container as HTMLElement).scrollTo({ top: 0, behavior: 'smooth' });
  }

  private getScrollContainer(element: HTMLElement): HTMLElement | Window {
    let current: HTMLElement | null = element.parentElement;
    while (current && current !== document.body) {
      const style = window.getComputedStyle(current);
      const isScrollable =
        /(auto|scroll)/.test(style.overflowY) ||
        /(auto|scroll)/.test(style.overflow);
      if (isScrollable && current.scrollHeight > current.clientHeight) {
        return current;
      }
      current = current.parentElement;
    }
    return window;
  }
}
