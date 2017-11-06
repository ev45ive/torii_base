import { Injectable } from '@angular/core';
import { Api } from "../base/api";
import { HttpClient } from "@angular/common/http";
import { User } from "./user.interface";
import { Resource } from "../base/resource";

@Injectable()
export class UsersService {

  api

  constructor(private http:HttpClient) {
    this.api = new Api<User>(http, 'http://localhost:3000/users/')
  }

  createResource(id?){
    return new Resource<User>(this.api,id)
  }
  
  create(data){
    var user = this.createResource(data.id)
    return user.save(data)
  }

  fetch(id){
    var user = this.createResource(id)
    return user.fetch()
  }

  save(data){
    var newUser = this.createResource()
    return newUser.save(data)
  }

}
