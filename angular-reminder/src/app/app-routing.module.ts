import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import {ContactPageComponent} from './pages/contact-page/contact-page.component';
import {NothingFoundPageComponent} from './pages/nothing-found-page/nothing-found-page.component';
import {SubpageOfContactComponent} from './pages/subpage-of-contact/subpage-of-contact.component';
import {SubpageOfContactAnotherComponent} from './pages/subpage-of-contact-another/subpage-of-contact-another.component';
import {ContactStartComponent} from './pages/contact-start/contact-start.component';
import {TutorialsPageComponent} from './pages/tutorials-page/tutorials-page.component'; 



const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'contact', component: ContactPageComponent, children: [
    { path: '', component: ContactStartComponent },
    { path: 'C1', component: SubpageOfContactComponent },
    { path: 'C2', component: SubpageOfContactAnotherComponent },
  ] },
  { path: 'tutorials', component: TutorialsPageComponent },
  { path: '**', component: NothingFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
