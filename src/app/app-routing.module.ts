import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/screens/home/home.component';
import { ContactComponent } from './components/screens/contact/contact.component';
import { AboutComponent } from './components/screens/about/about.component';
import { CatalogMenComponent } from './components/screens/catalog-men/catalog-men.component';
import { CatalogWomenComponent } from './components/screens/catalog-women/catalog-women.component';

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
    path: 'catalog-men',
    component: CatalogMenComponent
  },
  {
    path: 'catalog-women',
    component: CatalogWomenComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
