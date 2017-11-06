import { Component } from '@angular/core';
import { Api } from "./base/api";
import { Resource } from "./base/resource";
import { HttpClient } from "@angular/common/http";

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
  
  constructor(private _http:HttpClient){
    this.api = new UsersApi(_http)
  }

  create(data){
    var newUser = new UserResource(this.api)
    newUser.save(data).subscribe(user =>{
      this.user = user
    })
  }

  fetch(id){
    var user = new UserResource(this.api, id)
    user.fetch().subscribe(user =>{
      this.user = user
    })
  }

  save(data){
    var newUser = new UserResource(this.api)
    newUser.save(data).subscribe(user =>{
      this.user = user
    })
  }

}
