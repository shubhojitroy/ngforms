import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IncludeModule } from '../includes/include.module';
import { HomeRoutingModule } from './home-routing.module';

import { WelcomeComponent } from './welcome.component';
import { TermsOfUseComponent } from './terms-of-use.component';
import { PrivacyPolicyComponent } from './privacy-policy.component';
import { PageNotFoundComponent } from './page-not-found.component';

@NgModule({
  declarations: [
    WelcomeComponent,
    TermsOfUseComponent,
    PrivacyPolicyComponent,
    PageNotFoundComponent
  ],
  imports: [CommonModule, IncludeModule, HomeRoutingModule]
})
export class HomeModule {}
