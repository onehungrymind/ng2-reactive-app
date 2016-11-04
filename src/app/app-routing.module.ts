import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemsComponent } from './items/items.component';
import { UsersComponent } from "./users/users.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  {path: '',      component: HomeComponent },
  {path: 'home', component: HomeComponent},
  {path: 'items', component: ItemsComponent},
  {path: 'users', component: UsersComponent},
  {path: '*',     component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class Ng2RestAppRoutingModule { }
