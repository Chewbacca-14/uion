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
  imports: [
    RouterModule,
    HeaderComponent,
    AboutUsComponent,
    FooterComponent,
    TechnologiesComponent,
    OurServicesComponent,
    WhyChooseUsComponent,
    ContactsComponent,
    WorkStepsComponent,
    StepsComponent,
    FaqComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle(
      'UION — Tvoříme inovativní IT řešení na míru vašemu podnikání.'
    );
    this.meta.addTags([
      {
        name: 'description',
        content: 'Tvoříme inovativní IT řešení na míru vašemu podnikání.',
      },
      {
        name: 'keywords',
        content: 'vývoj webových stránek, mobilní aplikace, Praha, IT',
      },
    ]);
  }
}
