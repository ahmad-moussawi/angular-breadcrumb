import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ActivationEnd } from '@angular/router';
import 'rxjs/add/operator/filter'
import 'rxjs/add/operator/distinctUntilChanged'
import 'rxjs/add/operator/debounceTime'

@Component({
  selector: 'breadcrumb',
  template: `
  <ol class="breadcrumb">
    <li><a routeLink="/">Home</a>
    <li *ngFor="let item of items" [class]="'level-' + item.level" [class.last]="item.isLast">
      <a *ngIf="!item.isLast" [routerLink]="['/' + item.url, item.params]">{{ item.name }}</a>
      <span *ngIf="item.isLast">{{ item.name }}</span>
    </li>
  </ol>
  `,
})
export class BreadcrumbComponent implements OnInit {

  items: any[] = [];

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.router.events
      .filter(e => e instanceof ActivationEnd)
      .debounceTime(100)
      .distinctUntilChanged()
      .subscribe(event => {

        const tree = this.buildTree(this.route);

        const items = this.flat(tree)
          // hide items marked with breadcrumb: false
          .filter(x => !(x.includeInBreadcrumb === false))
          // omit first element
          .splice(1);


        // join urls
        this.items = items
          .map((item, index) => {

            if (index > 0) {
              item.url = items[index - 1].url + '/' + item.url;
            }

            return item;
          })

      })
  }

  flat(tree) {
    if (tree.children && tree.children.length) {
      return [tree, ...this.flat(tree.children[0])]
    } else {
      return [tree]
    }
  }

  buildTree(route: ActivatedRoute, level = 1) {

    // children with empty path should be ignored
    const children = route.children.filter(x => x.routeConfig && x.routeConfig.path !== '');

    return {
      level: level,
      params: route.snapshot.params,
      name: route.routeConfig && route.routeConfig.data && route.routeConfig.data.name || 'no name',
      includeInBreadcrumb: route.routeConfig && route.routeConfig.data && route.routeConfig.data.breadcrumb !== false,
      url: route.snapshot.url.join('/'),
      path: route.routeConfig ? route.routeConfig.path : null,
      children: children.map(x => this.buildTree(x, level + 1)),
      isLast: children.length === 0,
    }

  }

}
