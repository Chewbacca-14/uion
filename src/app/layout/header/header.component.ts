import { AfterViewInit, Component, OnInit } from '@angular/core';
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
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
