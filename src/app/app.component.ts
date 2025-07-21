import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { AboutUsComponent } from './feature/about-us/about-us.component';
import { FooterComponent } from './layout/footer/footer.component';
import { AboutUsCardComponent } from './shared/components/about-us-card/about-us-card.component';
import { TechnologiesComponent } from './feature/technologies/technologies.component';
import { OurServicesComponent } from './feature/our-services/our-services.component';
import { WhyChooseUsComponent } from './feature/why-choose-us/why-choose-us.component';
import { WhyUsCardComponent } from './shared/components/why-us-card/why-us-card.component';
import { ContactsComponent } from './feature/contacts/contacts.component';
import {WorkStepsComponent} from "./feature/work-steps/work-steps.component";
import {StepsComponent} from "./feature/steps/steps.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    AboutUsComponent,
    FooterComponent,
    TechnologiesComponent,
    OurServicesComponent,
    WhyChooseUsComponent,
    WhyUsCardComponent,
    ContactsComponent,
    WorkStepsComponent,
    StepsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'brivex-website';
}
