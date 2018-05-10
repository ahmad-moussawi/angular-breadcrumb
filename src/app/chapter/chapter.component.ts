import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chapter',
  template: `
    <h3>
      Chapter {{ (route.params | async).chapter }}
    </h3>
  `
})
export class ChapterComponent implements OnInit {

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit() {

  }

}
