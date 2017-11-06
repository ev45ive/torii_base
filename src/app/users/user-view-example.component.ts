import { Component, OnInit } from '@angular/core';
import { UserResourceComponent } from "./user-resource.component";
import { User } from "./user.interface";
import { ResourceComponent } from "../base/resource.component";
import { UsersService } from "./users.service";

@Component({
  selector: 'user-view-example',
  template: `
      Hello
      id:
      <input [(ngModel)]="data.id" value="1">
      name:
      <input [(ngModel)]="data.name">

      <button (click)="create(data)">Create</button>
      <button (click)="fetch(data.id)">Fetch</button>
      <button (click)="save(data)">Save</button>
  `,
  styles: []
})
export class UserViewExampleComponent extends ResourceComponent<User> implements OnInit {

  constructor(protected service:UsersService){
    super(service)
  }

  data = {}

  ngOnInit() {
    this.fetch(1)

  }

}
