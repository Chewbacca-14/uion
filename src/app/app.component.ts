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
import { SeoService } from './services/seo.service';
import { SEO_CONFIG } from './config/seo.config';
import { inject } from '@vercel/analytics';

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
    ContactsComponent,
    WorkStepsComponent,
    StepsComponent,
    FaqComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'uion';

  constructor(private seoService: SeoService) {
    inject();
  }

  ngOnInit() {
    // Set default SEO data for the homepage
    this.seoService.updateSEO({
      title: SEO_CONFIG.default.title,
      description: SEO_CONFIG.default.description,
      keywords: SEO_CONFIG.default.keywords,
      url: SEO_CONFIG.default.url,
      image: SEO_CONFIG.default.image,
      type: SEO_CONFIG.default.type,
      author: 'UION Softwares',
      locale: SEO_CONFIG.default.locale,
    });
  }
}
