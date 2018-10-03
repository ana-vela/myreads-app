
 // Grateful for guidance from these two walk throughs https://www.youtube.com/watch?v=i6L2jLHV9j8
//and https://www.youtube.com/watch?v=acJHkd6K5kI&=&feature=youtu.be

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Book extends Component {
  constructor(props) {
    super(props)

    this.state = {
      shelf: props.book.shelf
    }
  }

  componentDidMount() {
    this.setState({shelf: this.props.book.shelf})
  }

  shelfMove = (event) => {
    const shelf = event.target.value;
    this.props.shelfMove(this.props.books, shelf);
    this.setState({ shelf: this.props.book.shelf });
  }

render() {
  let showThumbnail = this.props.book.imageLinks ?
  this.props.book.imageLinks.thumbnail :
  '';

  const { title,  authors = ['author unknown']} = this.props.book;
  const { shelfMove, book } = this.props;
  const { shelf } = this.state;

  return(
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `URL("${showThumbnail}")` }}></div>
        <div className="book-shelf-changer">

          <select value={shelf} onChange={(event) => shelfMove(book, event.target.value)} >

            <option value="move" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>

      <div className="book-title">{title}</div>
      <div className="book-authors">

        {authors[0]}
        <br></br>
        {authors[1]}

      </div>
    </div>
  );
}
}

export default Book;

Book.propTypes = {
showThumbnail: PropTypes.string,
title: PropTypes.string,
authors: PropTypes.string,
book: PropTypes.object,
value: PropTypes.string
};
