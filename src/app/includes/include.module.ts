import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IncludeRoutingModule } from './include-routing.module';
import { FooterComponent } from './footer.component';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [FooterComponent, HeaderComponent],
  imports: [CommonModule, IncludeRoutingModule],
  exports: [HeaderComponent, FooterComponent]
})
export class IncludeModule {}
