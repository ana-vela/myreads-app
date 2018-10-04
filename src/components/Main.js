
 // Grateful for guidance from these two walk throughs https://www.youtube.com/watch?v=i6L2jLHV9j8
//and https://www.youtube.com/watch?v=acJHkd6K5kI&=&feature=youtu.be

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Shelf from './Shelf';
import PropTypes from 'prop-types';

export default class Main extends Component {

render() {

const { books, shelfMove } = this.props;

  return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>

          <div className="list-books-content">
            <div>
              <Shelf name="Want to Read" books={books.filter(book => book.shelf === "wantToRead")}
                shelfMove={shelfMove} />

              <Shelf name="Currently Reading" books={books.filter(book => book.shelf === "currentlyReading")}
                shelfMove={shelfMove} />

              <Shelf name="Read" books={books.filter(book => book.shelf === "read")}
                shelfMove={shelfMove} />

            </div>
          </div>
          {/* search code */}
          <div className="open-search">
            <Link to="/search">Add a book</Link>

          </div>
        </div>
      );
    }
  }

Main.propTypes = {
shelfMove: PropTypes.func.isRequired,
books: PropTypes.array,
shelf: PropTypes.string
};
