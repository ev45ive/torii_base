import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'


import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { UsersService } from "./users/users.service";
import { UserResourceComponent } from './users/user-resource.component';
import { UserViewExampleComponent } from './users/user-view-example.component';


@NgModule({
  declarations: [
    AppComponent,
    UserResourceComponent,
    UserViewExampleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
