import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CarouselModule } from 'ng2-bootstrap/carousel';

import { AppComponent } from './app.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { ContactComponent } from './components/contact/contact.component';
import { LocationsComponent } from './components/locations/locations.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { routing } from './app.routing'
import { AgmCoreModule } from 'angular2-google-maps/core';
import { MapOneComponent } from './components/map-one/map-one.component';
import { PressComponent } from './components/press/press.component';
import { CateringComponent } from './components/catering/catering.component';
import { FaqComponent } from './components/faq/faq.component';
import { FranchiseComponent } from './components/franchise/franchise.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontPageComponent,
    NavBarComponent,
    FooterComponent,
    MenuComponent,
    ContactComponent,
    LocationsComponent,
    JobsComponent,
    MapOneComponent,
    PressComponent,
    CateringComponent,
    FaqComponent,
    FranchiseComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CarouselModule.forRoot(),
    routing,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDMCTrfLdAYLeM88_SHWYgiikKbwA9shM0',
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
