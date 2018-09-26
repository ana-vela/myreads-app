
 // Grateful for guidance from these two walk throughs https://www.youtube.com/watch?v=i6L2jLHV9j8
//and https://www.youtube.com/watch?v=acJHkd6K5kI&=&feature=youtu.be


import React from 'react'
import { Route } from 'react-router-dom';
import Search from './Search';
import Main from './Main';
import * as BooksAPI from './BooksAPI'

import '../App.css'

class BooksApp extends React.Component {
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

    return (
      <div className="app">

        <Route exact path="/" render={() => (
          <Main
            books={this.state.books}
            moveShelf={this.moveShelf}
            />
        )}/>

      <Route path="/search" render ={() => (
          <Search
            books={this.state.books}
            moveShelf={this.moveShelf}
            />
        )}/>

      </div>
    )
  }
}

export default BooksApp
