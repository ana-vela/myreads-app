import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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

const { books, moveShelf } = this.props;


  return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>

          <div className="list-books-content">
            <div>
        <Shelf name="Want to Read" books={books.filter(book => book.shelf === "wantToRead")}
        moveShelf={moveShelf}
        />
        <Shelf name="Currently Reading" books={books.filter(book => book.shelf === "currentlyReading")}
         moveShelf={moveShelf}

        />
        <Shelf name="Read" books={books.filter(book => book.shelf === "read")}
              moveShelf={moveShelf}

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
