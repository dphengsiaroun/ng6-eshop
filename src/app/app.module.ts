import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HomeComponent } from './components/views/home/home.component';
import { SliderComponent } from './components/slider/slider.component';
import { BannerComponent } from './components/banner/banner.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SidebarCartComponent } from './components/sidebar-cart/sidebar-cart.component';
import { SidebarNavComponent } from './components/sidebar-nav/sidebar-nav.component';
import { ModalProductComponent } from './components/modal-product/modal-product.component';
import { BackToTopComponent } from './components/back-to-top/back-to-top.component';
import { ModalSearchComponent } from './components/modal-search/modal-search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SliderComponent,
    BannerComponent,
    ProductListComponent,
    SidebarCartComponent,
    SidebarNavComponent,
    ModalProductComponent,
    BackToTopComponent,
    ModalSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
