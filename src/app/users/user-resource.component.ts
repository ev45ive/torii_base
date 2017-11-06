import { Component, OnInit } from '@angular/core';
import { UsersService } from "./users.service";
import { User } from "./user.interface";

@Component({
  selector: 'user-resource',
  template: `
    <p>
      user-resource works!
    </p>
  `,
  styles: [],
})
export class UserResourceComponent implements OnInit {

  constructor(private users:UsersService) { }

  user

  create(data){
    this.users.create(data).subscribe(user => this.user = user )
  }

  fetch(id){
    this.users.fetch(id).subscribe(user => this.user = user )
  }

  save(data){
    this.users.save(data).subscribe(user => this.user = user )
  }

  ngOnInit() {

  }

}
