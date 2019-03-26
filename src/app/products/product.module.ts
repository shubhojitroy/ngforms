import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IncludeModule } from '../includes/include.module';
import { SharedModule } from '../shared/shared.module';

import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';

@NgModule({
  declarations: [ProductListComponent, ProductDetailComponent],
  imports: [CommonModule, IncludeModule, SharedModule, ProductRoutingModule]
})
export class ProductModule {}
