import React from 'react'
import Search from './Search';
import Main from './Main';
import Book from './Book'
import * as BooksAPI from './BooksAPI'
// import * as BooksAPI from './BooksAPI'

import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
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

    return (
      <div className="app">

        {/*<Main
          books={this.state.books}
          moveShelf={this.moveShelf}
          />*/}
          <Search />
      </div>
    )
  }
}

export default BooksApp
