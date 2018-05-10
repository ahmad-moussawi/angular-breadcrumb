import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BooksComponent } from './books/books.component';
import { SectionComponent } from './section/section.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { MagazineComponent } from './magazine/magazine.component';
import { ArticleComponent } from './article/article.component';
import { ChapterComponent } from './chapter/chapter.component';
import { PageComponent } from './page/page.component';
import { BookComponent } from './book/book.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BooksComponent,
    BookComponent,
    ChapterComponent,
    PageComponent,
    BreadcrumbComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, data: { name: 'Home', breadcrumb: false } },
      {
        path: 'books', data: { name: 'Books', }, children: [
          { path: '', component: BooksComponent },
          {
            path: ':book', component: BookComponent, data: { name: 'Book Details' },
            children: [
              { path: 'chapters/:chapter', component: ChapterComponent, data: { name: 'Chapter Details' } },
              {
                path: 'pages/:page', component: PageComponent, data: {
                  name: 'Page Details'
                }
              },
            ]
          },
        ]
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
