import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/screens/home/home.component';
import { ContactComponent } from './components/screens/contact/contact.component';
import { AboutComponent } from './components/screens/about/about.component';
import { NewestComponent } from './components/screens/newest/newest.component';
import { MensComponent } from './components/screens/mens/mens.component';
import { WomensComponent } from './components/screens/womens/womens.component';
import { KidsComponent } from './components/screens/kids/kids.component';

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
    path: 'newest',
    component: NewestComponent
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
