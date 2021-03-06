
 // Grateful for guidance from these two walk throughs https://www.youtube.com/watch?v=i6L2jLHV9j8
//and https://www.youtube.com/watch?v=acJHkd6K5kI&=&feature=youtu.be

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';
import * as BooksAPI from './BooksAPI';
import PropTypes from 'prop-types';

export default class Search extends Component {

  constructor(props) {
    super(props)

    this.state = {
    query: '',
    bookSearch: [],
    books: []
  }
}

componentDidMount(book, shelf) {
  BooksAPI.getAll().then((res) => {
    this.setState({books: res})
    this.setState({shelf: res})

  })
}

// method where shelf is moved and new shelf state is saved
  shelfMove = (book, shelf) => {
    BooksAPI.update(book, shelf)
    .then(res => {
      book = book.shelf;
      this.setState({shelf: res})
      BooksAPI.getAll().then(res => this.setState({books: res}))

    })
  }

  updateQuery = (res) => {
    this.setState({query: res},
    this.updateBookSearch(res));
  }

//method where books are displayed after query and error handling occurs if there are no books available for a query
//help for this method from https://www.youtube.com/watch?v=i6L2jLHV9j8
  updateBookSearch = (query) => {
    if (query) {
      BooksAPI.search(query.trim()).then((bookSearch) => {
        if (bookSearch.error) {
          return this.setState({ bookSearch: [] });
        } else {
          this.setState({ bookSearch: bookSearch });
        }
      })
    } else {
      return this.setState({ bookSearch: [] });
    }
  }

  render() {

    //deconstructing variables for cleaner code
    const { shelfMove } = this.props;
    const{ query } = this.state;

    return (

      <div className="search-books">
        <div className="search-books-bar">

          <Link to="/" className="close-search">Close</Link>

          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input
              type="text"
              placeholder="Search by title"
              value={query}
              onChange={(event) => this.updateQuery(event.target.value)}
              />
          </div>

        </div>
        <div className="search-books-results">

          <ol className="books-grid">
            {/*Found a good solution to displaying book shelves in the search results thanks to the help from
             this walkthrough https://www.youtube.com/watch?v=bpKI3R0nf7E */}
          {this.state.bookSearch.map(book => {

            const shelved = this.props.books.find(bookSearch =>

              book.id === bookSearch.id );

              if (shelved) {
                book.shelf = shelved.shelf;
              } else {
                book.shelf = "none";
              }
              return (
              <li key={book.id}> <Book book={book} shelfMove={shelfMove} /> </li>
              )}
            )}
        </ol>
      </div>
    </div>
  );
  }
}

Search.propTypes = {
  value: PropTypes.string,
  bookSearch: PropTypes.array,
  book: PropTypes.object,
  books: PropTypes.array,
  updatebookSearch: PropTypes.string
};
