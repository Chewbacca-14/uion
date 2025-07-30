import { Routes } from '@angular/router';
import { HomeComponent } from './feature/home/home.component';
import { PrivacyPolicyComponent } from './feature/privacy-policy/privacy-policy.component';
import { TermsComponent } from './feature/terms/terms.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'terms-of-service', component: TermsComponent },
];
