
 // Grateful for guidance from these two walk throughs https://www.youtube.com/watch?v=i6L2jLHV9j8
//and https://www.youtube.com/watch?v=acJHkd6K5kI&=&feature=youtu.be

import React from 'react';
import { Route } from 'react-router-dom';
import Search from './Search';
import Main from './Main';
import * as BooksAPI from './BooksAPI';

import '../App.css';

export default class BooksApp extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      books: []
  }
}

  componentDidMount(book, shelf) {
    BooksAPI.getAll().then((res) => {
      this.setState({books: res})
      this.setState({shelf: res})
    })
  }

  shelfMove = (book, shelf) => {
    BooksAPI.update(book, shelf).then(res => {
      BooksAPI.getAll().then(res => this.setState({books: res}))
      this.setState({shelf: res})
    })
  }

  render() {

    const { books } = this.state;

    return (
      <div className="app">

        <Route exact path="/" render={() => (
          <Main
            books={books}
            shelfMove={this.shelfMove}
            />
        )}/>

      <Route path="/search" render ={() => (
          <Search
            books={books}
            shelfMove={this.shelfMove}
            />
        )}/>
      </div>
    )
  }
}
