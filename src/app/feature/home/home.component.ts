import { Component } from '@angular/core';
import { HeaderComponent } from '../../layout/header/header.component';
import { AboutUsComponent } from '../../feature/about-us/about-us.component';
import { TechnologiesComponent } from '../../feature/technologies/technologies.component';
import { OurServicesComponent } from '../../feature/our-services/our-services.component';
import { WhyChooseUsComponent } from '../../feature/why-choose-us/why-choose-us.component';
import { ContactsComponent } from '../../feature/contacts/contacts.component';
import { FaqComponent } from '../../feature/faq/faq.component';
import { WorkStepsComponent } from '../../feature/work-steps/work-steps.component';
import { StepsComponent } from '../../feature/steps/steps.component';
import { ScrollAnimateDirective } from '../../scroll-animate.directive';
import { PricesComponent } from '../../feature/prices/prices.component';
import { PortfolioComponent } from '../../feature/portfolio/portfolio.component';
import { LogosCarouselComponent } from '../../shared/components/logos-carousel/logos-carousel.component';
import { LogosComponent } from '../../feature/logos/logos.component';

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
    ScrollAnimateDirective, // <- add directive here
    PricesComponent,
    PortfolioComponent,
    LogosCarouselComponent,
    LogosComponent
  ],
  template: `
    <app-header></app-header>
    <app-logos></app-logos>
    <app-our-services></app-our-services>
    <app-portfolio appScrollAnimate></app-portfolio>
    <app-prices appScrollAnimate></app-prices>
    <app-technologies appScrollAnimate></app-technologies>
    <app-about-us appScrollAnimate></app-about-us>
    <app-steps appScrollAnimate></app-steps>
    <app-why-choose-us appScrollAnimate></app-why-choose-us>
    <app-work-steps appScrollAnimate></app-work-steps>
    <app-contacts appScrollAnimate></app-contacts>
    <app-faq appScrollAnimate></app-faq>
  `,
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {}
