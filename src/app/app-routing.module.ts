import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/screens/home/home.component';
import { ContactComponent } from './components/screens/contact/contact.component';
import { AboutComponent } from './components/screens/about/about.component';
import { NewnessComponent } from './components/screens/newness/newness.component';
import { MensComponent } from './components/screens/mens/mens.component';
import { WomensComponent } from './components/screens/womens/womens.component';
import { KidsComponent } from './components/screens/kids/kids.component';
import { ProductDetailComponent } from './components/screens/product-detail/product-detail.component';
import { CartComponent } from './components/screens/cart/cart.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'newness',
    component: NewnessComponent
  },
  {
    path: 'mens',
    component: MensComponent
  },
  {
    path: 'womens',
    component: WomensComponent
  },
  {
    path: 'kids',
    component: KidsComponent
  },
  {
    path: 'detail/:id',
    component: ProductDetailComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
  })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
