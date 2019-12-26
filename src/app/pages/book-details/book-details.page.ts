import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from './../../services/book.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.page.html',
  styleUrls: ['./book-details.page.scss'],
})
export class BookDetailsPage implements OnInit {

  information = null;

  /**
   * Constructor of our details page
   * @param activatedRoute Information about the route we are on
   * @param movieService The movie Service to get data
   */
  constructor(private activatedRoute: ActivatedRoute, private bookService: BookService) { }

  ngOnInit() {
    // Get the ID that was passed with the URL
    let id = this.activatedRoute.snapshot.paramMap.get('id');

    // Get the information from the API
    this.bookService.getDetails(id).subscribe(result => {
      this.information = result;
    });
  }
  openWebsite() {
    window.open(this.information.Website, '_blank');
  }

}
