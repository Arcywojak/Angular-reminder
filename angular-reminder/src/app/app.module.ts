import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/tutorial.reducer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './permament-components/header/header.component';
import { FooterComponent } from './permament-components/footer/footer.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { NothingFoundPageComponent } from './pages/nothing-found-page/nothing-found-page.component';
import { SubpageOfContactComponent } from './pages/subpage-of-contact/subpage-of-contact.component';
import { SubpageOfContactAnotherComponent } from './pages/subpage-of-contact-another/subpage-of-contact-another.component';
import { ContactStartComponent } from './pages/contact-start/contact-start.component';
import { TutorialsPageComponent } from './pages/tutorials-page/tutorials-page.component';
import { CreateTutorialComponent } from './pages/tutorials-page/components/create-tutorial/create-tutorial.component';
import { ReadTutorialComponent } from './pages/tutorials-page/components/read-tutorial/read-tutorial.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    AboutPageComponent,
    ContactPageComponent,
    NothingFoundPageComponent,
    SubpageOfContactComponent,
    SubpageOfContactAnotherComponent,
    ContactStartComponent,
    TutorialsPageComponent,
    CreateTutorialComponent,
    ReadTutorialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      tutorial: reducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
