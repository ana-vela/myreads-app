import React, { Component } from 'react';

class Book extends Component {

render() {
  let showThumbnail = this.props.book.imageLinks ?
  this.props.book.imageLinks.thumbnail :
  '';

  const { title, authors, book, currentShelf } = this.props.book;

  return(
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `URL("${showThumbnail}")` }}></div>
        <div className="book-shelf-changer">
          <select
            onChange={(event) => this.props.moveShelf(
              this.props.book, event.target.value
            )}
            value={currentShelf}
            >
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
