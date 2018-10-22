import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HomeComponent } from './components/screens/home/home.component';
import { SliderComponent } from './components/ui/slider/slider.component';
import { BannerComponent } from './components/ui/banner/banner.component';
import { ProductListComponent } from './components/ui/product-list/product-list.component';
import { SidebarCartComponent } from './components/ui/sidebar-cart/sidebar-cart.component';
import { SidebarNavComponent } from './components/ui/sidebar-nav/sidebar-nav.component';
import { ModalProductComponent } from './components/ui/modal-product/modal-product.component';
import { BackToTopComponent } from './components/ui/back-to-top/back-to-top.component';
import { ModalSearchComponent } from './components/ui/modal-search/modal-search.component';
import { ContactComponent } from './components/screens/contact/contact.component';
import { AboutComponent } from './components/screens/about/about.component';
import { CatalogMenComponent } from './components/screens/catalog-men/catalog-men.component';
import { HeaderMainComponent } from './components/layout/header-main/header-main.component';
import { CatalogWomenComponent } from './components/screens/catalog-women/catalog-women.component';
import { BlogComponent } from './components/ui/blog/blog.component';

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
		ModalSearchComponent,
		ContactComponent,
		AboutComponent,
		CatalogMenComponent,
		HeaderMainComponent,
		CatalogWomenComponent,
		BlogComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
