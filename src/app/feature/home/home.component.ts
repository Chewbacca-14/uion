import { Component } from '@angular/core';
import { HeaderComponent } from '../../layout/header/header.component';
import { AboutUsComponent } from '../../feature/about-us/about-us.component';
import { FooterComponent } from '../../layout/footer/footer.component';
import { TechnologiesComponent } from '../../feature/technologies/technologies.component';
import { OurServicesComponent } from '../../feature/our-services/our-services.component';
import { WhyChooseUsComponent } from '../../feature/why-choose-us/why-choose-us.component';
import { ContactsComponent } from '../../feature/contacts/contacts.component';
import { FaqComponent } from '../../feature/faq/faq.component';
import { WorkStepsComponent } from '../../feature/work-steps/work-steps.component';
import { StepsComponent } from '../../feature/steps/steps.component';
import { SeoService } from '../../services/seo.service';
import { inject } from '@vercel/analytics';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    AboutUsComponent,
    TechnologiesComponent,
    OurServicesComponent,
    WhyChooseUsComponent,
    ContactsComponent,
    WorkStepsComponent,
    StepsComponent,
    FaqComponent,
  ],
  template: `
    <app-header></app-header>
    <app-our-services></app-our-services>
    <app-technologies></app-technologies>
    <app-about-us></app-about-us>
    <app-steps></app-steps>
    <app-why-choose-us></app-why-choose-us>
    <app-work-steps></app-work-steps>
    <app-contacts></app-contacts>
    <app-faq></app-faq>
  `,
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
