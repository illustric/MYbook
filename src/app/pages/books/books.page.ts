import { Component, OnInit } from '@angular/core';
import { BookService, SearchType } from './../../services/book.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-books',
  templateUrl: './books.page.html',
  styleUrls: ['./books.page.scss'],
})
export class BooksPage implements OnInit {

  results: Observable<any>;
  searchTerm: string = '';
  type: SearchType = SearchType.all;
 
  /**
   * Constructor of our first page
   * @param movieService The movie Service to get data
   */

  constructor(private bookService: BookService) { }

  ngOnInit() {
  }
  searchChanged() {
    // Call our service function which returns an Observable
    this.results = this.bookService.searchData(this.searchTerm, this.type);
  }
}
