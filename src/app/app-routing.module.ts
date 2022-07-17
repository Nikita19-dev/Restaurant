import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LocateComponent } from './locate/locate.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  { path: "", component: LandingPageComponent },
  {path:"contact",component:ContactComponent},
  {path:"locate",component:LocateComponent},
  {path:"menu",component:MenuComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
