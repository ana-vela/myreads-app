import React, { Component } from 'react';
import Book from './Book';
import * as BooksAPI from './BooksAPI';


class Shelf extends Component {
  moveShelf = (book, shelf) => {
    BooksAPI.update(book, shelf);

    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })
  }
render() {

  return(
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">{this.props.name}</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">

                  {
                    this.props.books
                    .filter(book => book.shelf === 'wantToRead')
                    .map(book => (
                      <li key={book.id}>
                        <Book
                          book={book}
                          moveShelf={this.props.moveShelf}
                          currentShelf="wantToRead"
                          />
                      </li>
                    ))
                  }
                  {
                    this.props.books
                    .filter(book => book.shelf === 'read')
                    .map(book => (
                      <li key={book.id}>
                        <Book
                          book={book}
                          moveShelf={this.props.moveShelf}
                          currentShelf="read"
                          />
                      </li>
                    ))
                  }
                  {
                    this.props.books
                    .filter(book => book.shelf === 'currentlyReading')
                    .map(book => (
                      <li key={book.id}>
                        <Book
                          book={book}
                          moveShelf={this.props.moveShelf}
                          currentShelf="currentlyReading"
                          />
                      </li>
                    ))
                  }
                  </ol>
                </div>
              </div>
            </div>
          </div>
        )
      }
    }
export default Shelf;
