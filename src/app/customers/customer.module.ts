import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IncludeModule } from '../includes/include.module';
import { SharedModule } from '../shared/shared.module';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';

@NgModule({
  declarations: [CustomerComponent],
  imports: [CommonModule, IncludeModule, SharedModule, CustomerRoutingModule]
})
export class CustomerModule {}
