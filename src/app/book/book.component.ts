import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book',
  template: `
  <h2>Book {{ (route.params | async).book }}</h2>
  <router-outlet></router-outlet>
  `
})
export class BookComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

  }

}
