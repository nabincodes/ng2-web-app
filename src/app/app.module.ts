import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BookDetailsComponent } from './books/book-details/book-details.component';
import { BookListsComponent } from './books/book-lists/book-lists.component';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {BookService} from "./book.service";

@NgModule({
  declarations: [
    AppComponent,
    BookDetailsComponent,
    BookListsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
