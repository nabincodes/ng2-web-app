import { Component, OnInit } from '@angular/core';
import {Books} from "../book.model";

@Component({
  selector: 'app-book-lists',
  templateUrl: './book-lists.component.html',
  styleUrls: ['./book-lists.component.css']
})
export class BookListsComponent implements OnInit {

  books: Books[] = [
    {
      "id" : 1,
      "name" : "War and Peace",
      "productCode": "GSI-0011",
      "releaseDate": "March 19, 1865",
      "description": "Tolstoy's epic masterpiece intertwines the lives of private and public individuals during the time of the Napoleonic wars and the French invasion of Russia. The fortunes of the Rostovs and the Bolkonskys, of Pierre, Natasha, and Andrei, are intimately connected with the national history that is played out in parallel with their lives. Balls and soirees alternate with councils of war and the machinations of statesmen and generals, scenes of violent battles with everyday human passions in a work whose extraordinary imaginative power has never been surpassed.",
      "author" : "Leo Tolstoy",
      "genre" : "war",
      "specifications": "Paperback, 1392 pages",
      "inStock" : true,
      "price" : 19.95,
      "starRating": 19,
      "imageUrl":"../../../assets/images/656.jpg"
    },
    {
      "id" : 2,
      "name" : "The Hobbit",
      "productCode": "RBV-0012",
      "releaseDate": "September 21, 1937",
      "description": "Written for J.R.R. Tolkien’s own children, The Hobbit met with instant critical acclaim when it was first published in 1937. Now recognized as a timeless classic, this introduction to the hobbit Bilbo Baggins, the wizard Gandalf, Gollum, and the spectacular world of Middle-earth recounts of the adventures of a reluctant hero, a powerful and dangerous ring, and the cruel dragon Smaug the Magnificent.",
      "author" : "J.R.R. Tolkien",
      "genre" : "fantasy",
      "specifications": "Paperback, 366 pages",
      "inStock" : true,
      "price" : 14.95,
      "starRating": 24,
      "imageUrl": "../../../assets/images/5907.jpg"
    },
    {
      "id" : 3,
      "name" : "Needful Things",
      "productCode": "JAN-0013",
      "releaseDate": "October, 1991",
      "description": "Leland Gaunt opens a new shop in Castle Rock called Needful Things. Anyone who enters his store finds the object of his or her lifelong dreams and desires: a prized baseball card, a healing amulet. In addition to a token payment, Gaunt requests that each person perform a little 'deed,' usually a seemingly innocent prank played on someone else from town. These practical jokes cascade out of control and soon the entire town is doing battle with itself. Only Sheriff Alan Pangborn suspects that Gaunt is behind the population's increasingly violent behavior.",
      "author" : "Stephen King",
      "genre" : "horror",
      "specifications": "Paperback, 790 pages",
      "inStock" : true,
      "price" : 9.95,
      "starRating": 16,
      "imageUrl": "../../../assets/images/107291.jpg"
    },
    {
      "id" : 4,
      "name" : "To Kill a Mockingbird",
      "productCode": "JHI-0014",
      "releaseDate": "May, 1960",
      "description": "The unforgettable novel of a childhood in a sleepy Southern town and the crisis of conscience that rocked it, To Kill A Mockingbird became both an instant bestseller and a critical success when it was first published in 1960. It went on to win the Pulitzer Prize in 1961 and was later made into an Academy Award-winning film, also a classic.",
      "author" : "Harper Lee",
      "genre" : "fiction",
      "specifications": "Paperback, 324 pages",
      "inStock" : true,
      "price" : 8.95,
      "starRating": 37,
      "imageUrl": "../../../assets/images/2657.jpg"
    },
    {
      "id" : 5,
      "name" : "The Hot Zone",
      "productCode": "MIU-0015",
      "releaseDate": "June, 1994",
      "description": "A highly infectious, deadly virus from the central African rain forest suddenly appears in the suburbs of Washington, D.C. There is no cure. In a few days 90 percent of its victims are dead. A secret military SWAT team of soldiers and scientists is mobilized to stop the outbreak of this exotic 'hot' virus. The Hot Zone tells this dramatic story, giving a hair-raising account of the appearance of rare and lethal viruses and their 'crashes' into the human race.",
      "author" : "Richard Preston",
      "genre" : "nonfiction",
      "specifications": "Paperback, 352 pages",
      "inStock" : true,
      "price" : 11.95,
      "starRating": 45,
      "imageUrl": "../../../assets/images/16213.jpg"
    },
    {
      "id" : 6,
      "name" : "The Universe in a Nutshell",
      "productCode": "NKL-0016",
      "releaseDate": "November, 2001",
      "description": "Stephen Hawking’s phenomenal, multimillion-copy bestseller, A Brief History of Time, introduced the ideas of this brilliant theoretical physicist to readers all over the world. Now, in a major publishing event, Hawking returns with a lavishly illustrated sequel that unravels the mysteries of the major breakthroughs that have occurred in the years since the release of his acclaimed first book.",
    "author" : "Stephen Hawking",
  "genre" : "nonfiction",
  "specifications": "Hardcover, 216 pages",
  "inStock" : true,
  "price" : 14.95,
  "starRating": 61,
  "imageUrl": "../../../assets/images/2095.jpg"
}
  ];

  constructor() { }

  ngOnInit() {
  }

}
