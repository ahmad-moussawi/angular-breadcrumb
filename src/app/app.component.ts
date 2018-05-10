import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `App

  <ul>
    <li><a routerLink="/">Home</a></li>
    <li>
      <a routerLink="/books">Books</a>
      <ul>
        <li>
          <a routerLink="/books/1">Learning C#</a>
          <ul>
            <li><a routerLink="/books/1/chapters/1">Chapter 1</a></li>
            <li><a routerLink="/books/1/chapters/2">Chapter 2</a></li>
            <li><a routerLink="/books/1/chapters/3">Chapter 3</a></li>
          </ul>
        </li>
        <li>
          <a routerLink="/books/2">Learning PHP</a>
          <ul>
            <li><a routerLink="/books/2/chapters/1">Chapter 1</a></li>
            <li><a routerLink="/books/2/chapters/2">Chapter 2</a></li>
            <li><a routerLink="/books/2/chapters/3">Chapter 3</a></li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>

  <breadcrumb></breadcrumb>

  <router-outlet></router-outlet>

  `,
})
export class AppComponent {
  title = 'app';
}
