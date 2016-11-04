import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2RestAppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';

import { ItemsService, items, UsersService, users, WidgetsService, widgets, HomeService } from './shared';

import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';
import { ItemsListComponent } from './items/items-list/items-list.component';
import { ItemDetailComponent } from './items/item-detail/item-detail.component';

import { UsersComponent } from './users/users.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';

import { WidgetsComponent } from './widgets/widgets.component';
import { WidgetsListComponent } from './widgets/widgets-list/widgets-list.component';
import { WidgetDetailComponent } from './widgets/widget-detail/widget-detail.component';

import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    ItemsListComponent,
    ItemDetailComponent,
    UsersComponent,
    UsersListComponent,
    UserDetailComponent,
    HomeComponent,
    WidgetsComponent,
    WidgetsListComponent,
    WidgetDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2RestAppRoutingModule,
    StoreModule.provideStore({ items, users, widgets })
  ],
  providers: [ItemsService, UsersService, WidgetsService, HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
