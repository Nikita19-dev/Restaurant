import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactComponent } from './contact/contact.component';
import { FoodInfoComponent } from './food-info/food-info.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LocateComponent } from './locate/locate.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  { path: "", component: LandingPageComponent },
  { path: "contact", component: ContactComponent },
  { path: "locate", component: LocateComponent },
  { path: "menu", component: MenuComponent },
  { path: "checkout", component: CheckoutComponent },
  { path: "foodinfo", component: FoodInfoComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
