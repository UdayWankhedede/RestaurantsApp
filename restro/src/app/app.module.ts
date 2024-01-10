import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddResturantComponent } from './add-resturant/add-resturant.component';
import { UpdateResturantComponent } from './update-resturant/update-resturant.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ListResturantComponent } from './list-resturant/list-resturant.component';
import{HttpClientModule}from'@angular/common/http';
import{ReactiveFormsModule}from'@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    AddResturantComponent,
    UpdateResturantComponent,
    LoginComponent,
    RegisterComponent,
    ListResturantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
