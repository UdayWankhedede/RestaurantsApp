import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'node:path';
import { LoginComponent } from './login/login.component';
import { AddResturantComponent } from './add-resturant/add-resturant.component';
import { ListResturantComponent } from './list-resturant/list-resturant.component';
import { RegisterComponent } from './register/register.component';
import { UpdateResturantComponent } from './update-resturant/update-resturant.component';

const routes: Routes = [
  {path : "login" , component : LoginComponent},
  {path : "add", component : AddResturantComponent},
  {path : "list", component : ListResturantComponent},
  {path : "register", component : RegisterComponent},
  {path : "update/:id", component : UpdateResturantComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
