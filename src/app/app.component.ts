import { Component } from '@angular/core';
import { Api } from "./base/api";
import { Resource } from "./base/resource";
import { HttpClient } from "@angular/common/http";
import { UsersService } from "./users/users.service";

type Partial<T> = {
    [P in keyof T]?: T[P];
};

interface User{
  id:number
}

class UsersApi extends Api<User>{
  _url = 'http://localhost:3000/users/'

  update(id,data){
    // ...jakis kod specyficzny dla Usera
    // deleguje to wspolnej metody
    return super.update(id,data)
  }
}

class UserResource extends Resource<User>{ }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  api
  user:Partial<User> = {}
  
  constructor(){

  }




}
