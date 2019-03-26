import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// FEATURED MODULES
import { ProductModule } from './products/product.module';
import { HomeModule } from './home/home.module';
import { UserModule } from './users/user.module';
import { CustomerModule } from './customers/customer.module';
import { IncludeModule } from './includes/include.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    ProductModule,
    CustomerModule,
    HomeModule,
    IncludeModule,
    SharedModule,
    UserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
