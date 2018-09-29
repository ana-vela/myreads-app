import React, { Component } from 'react';
import Book from './Book';
import * as BooksAPI from './BooksAPI';


class Shelf extends Component {

render() {

const { name, books, moveShelf } = this.props;

  return(
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">{name}</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">

                  { books.map(book => (
                      <li key={book.id}>
                        <Book book={book} moveShelf={moveShelf} currentShelf={book.shelf} />
                      </li>
                    ))}

                  </ol>
                </div>
              </div>
            </div>
          </div>
        )
      }
    }
export default Shelf;
