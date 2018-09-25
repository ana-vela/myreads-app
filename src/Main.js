import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';
import Shelf from './Shelf';
import * as BooksAPI from './BooksAPI';


class Main extends Component {

  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }

  moveShelf = (book, shelf) => {
    BooksAPI.update(book, shelf);

    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })
  }
render() {

  return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>

          <div className="list-books-content">
            <div>
        <Shelf name="Want to Read" books={this.props.books.filter(book => book.shelf === "wantToRead")}
        moveShelf={this.props.moveShelf}
        />
        <Shelf name="Currently Reading" books={this.props.books.filter(book => book.shelf === "currentlyReading")}
         moveShelf={this.props.moveShelf}
        />
        <Shelf name="Read" books={this.props.books.filter(book => book.shelf === "read")}
              moveShelf={this.props.moveShelf}

             />
        </div>
        </div>
        {/* search code */}
        <div className="open-search">
          <Link
            to="/search"

          >Add a book</Link>
        </div>
      </div>
  );
}
}

export default Main;
