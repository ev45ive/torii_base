import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user-resource',
  template: `
    <p>
      user-resource works!
    </p>
  `,
  styles: [],
})
export class ResourceComponent<T> implements OnInit {

  constructor(protected service:any) { }

  data

  create(data){
    this.service.create(data)
        .subscribe(data => this.data = data )
  }

  fetch(id){
    this.service.fetch(id)
        .subscribe(data => this.data = data )
  }

  save(data){
    this.service.save(data)
        .subscribe(data => this.data = data )
  }

  ngOnInit() {

  }

}
