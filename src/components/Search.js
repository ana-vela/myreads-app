import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';
import * as BooksAPI from './BooksAPI';
import PropTypes from 'prop-types';


class Search extends Component {

  constructor(props) {
    super(props)

  this.state = {
    query: '',
    bookSearch: []
  }
}

  updateQuery = (query) => {
    this.setState({
      query: query
    })
    this.updateBookSearch(query);
  }

  updateBookSearch = (query) => {
    if (query) {
      BooksAPI.search(query).then((bookSearch) => {
        if (bookSearch.error) {
          this.setState({ bookSearch: [] });
        } else {
          this.setState({ bookSearch: bookSearch });
        }
      })
    } else {
      this.setState({ bookSearch: [] });
    }
  }
  render() {

const { books, shelfMove, book } = this.props;
const{ query, bookSearch } = this.state;

console.log(books);

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
            {bookSearch.map(bookSearch => {
              let shelf ="none";

              books.map(book => (
                book.id === book.id ?
                shelf = book.shelf :
                ''
              ));

              return (
              <li key={bookSearch.id}>
                <Book book={bookSearch} shelfMove={shelfMove} />
              </li>
            );
          })
        }
        </ol>
      </div>
    </div>
    );
  }
}

export default Search;

Search.propTypes = {
value: PropTypes.string,
bookSearch: PropTypes.array,
book: PropTypes.object,
books: PropTypes.array,
updatebookSearch: PropTypes.string
};
