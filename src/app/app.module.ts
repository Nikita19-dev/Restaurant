import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ContactComponent } from './contact/contact.component';
import { LocateComponent } from './locate/locate.component';
import { MenuComponent } from './menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatRadioModule } from '@angular/material/radio';
import { CheckoutComponent } from './checkout/checkout.component';
import { FoodInfoComponent } from './food-info/food-info.component';
import { MatDialogModule } from '@angular/material/dialog';
// import { LocationStrategy, HashLocationStrategy } from '@angular/common';





@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ContactComponent,
    LocateComponent,
    MenuComponent,
    CheckoutComponent,
    FoodInfoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatIconModule,
    MatSnackBarModule,
    MatRadioModule,
    MatDialogModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
