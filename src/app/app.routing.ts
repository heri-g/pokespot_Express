import {Routes, RouterModule} from "@angular/router";
import {MenuComponent} from "./components/menu/menu.component";
import {ContactComponent} from "./components/contact/contact.component";
import {LocationsComponent} from "./components/locations/locations.component";
import {JobsComponent} from "./components/jobs/jobs.component";
import {FrontPageComponent} from "./front-page/front-page.component";
import {PressComponent} from "./components/press/press.component";
import {CateringComponent} from "./components/catering/catering.component";
import {FaqComponent} from "./components/faq/faq.component";
import {FranchiseComponent} from "./components/franchise/franchise.component";

const APP_ROUTES: Routes = [
  {  path: '', redirectTo: '/front-page', pathMatch: 'full' },
  {  path: 'poke-menu', component: MenuComponent },
  {  path: 'front-page', component: FrontPageComponent },
  {  path: 'contact', component: ContactComponent },
  {  path: 'locations', component: LocationsComponent },
  {  path: 'jobs', component: JobsComponent },
  {  path: 'press', component: PressComponent },
  {  path: 'catering', component: CateringComponent },
  {  path: 'faq', component: FaqComponent },
  {  path: 'franchise', component: FranchiseComponent }
  ];

export const routing = RouterModule.forRoot(APP_ROUTES);
