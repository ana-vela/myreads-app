import React, { Component } from 'react';
import Book from './Book';
import PropTypes from 'prop-types';

export default class Shelf extends Component {

render() {

const { name, books, shelfMove } = this.props;

  return(
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">{name}</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">

                  { books.map(book => (
                      <li key={book.id}>
                        <Book book={book} shelfMove={shelfMove} currentShelf={book.shelf} />
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

Shelf.propTypes = {
  name: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  shelfMove: PropTypes.func.isRequired,
  currentShelf: PropTypes.string
};
