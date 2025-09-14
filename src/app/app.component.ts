import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from './layout/header/header.component';
import { AboutUsComponent } from './feature/about-us/about-us.component';
import { FooterComponent } from './layout/footer/footer.component';
import { TechnologiesComponent } from './feature/technologies/technologies.component';
import { OurServicesComponent } from './feature/our-services/our-services.component';
import { WhyChooseUsComponent } from './feature/why-choose-us/why-choose-us.component';
import { ContactsComponent } from './feature/contacts/contacts.component';
import { FaqComponent } from './feature/faq/faq.component';
import { WorkStepsComponent } from './feature/work-steps/work-steps.component';
import { StepsComponent } from './feature/steps/steps.component';
import { inject } from '@vercel/analytics';
import { RouterModule } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  constructor(private title: Title, private meta: Meta) {
    // this.title.setTitle(
    //   'UION — Tvoříme inovativní IT řešení na míru vašemu podnikání.'
    // );
    // this.meta.addTags([
    //   {
    //     name: 'description',
    //     content: 'Tvoříme inovativní IT řešení na míru vašemu podnikání.',
    //   },
    //   {
    //     name: 'keywords',
    //     content: 'vývoj webových stránek, mobilní aplikace, Praha, IT',
    //   },
    // ]);
  }
  ngOnInit(): void {
    this.title.setTitle(
      'Inovativní IT řešení na míru | Vývoj webů, aplikací a design - UION'
    );
    this.meta.addTags([
      {
        name: 'description',
        content:
          'Tvoříme inovativní IT řešení na míru vašemu podnikání. Neprodáváme kód - dodáváme kompletní řešení: webové stránky, mobilní aplikace a moderní design.',
      },
      {
        name: 'keywords',
        content:
          'IT řešení, webové stránky, mobilní aplikace, UX design, vývoj na míru',
      },
      {
        property: 'og:title',
        content: 'Inovativní IT řešení na míru | Vývoj webů, aplikací a design',
      },
      {
        property: 'og:description',
        content:
          'Neprodáváme kód - dodáváme kompletní řešení: weby, mobilní aplikace a design.',
      },
      { property: 'og:image', content: 'https://uion.cz/assets/preview.jpg' },
      { property: 'og:url', content: 'https://uion.cz' },
    ]);
  }
}
