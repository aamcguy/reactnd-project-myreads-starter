import React, {Component} from 'react';

class Book extends Component {
    handleShelfChange = (e) => {
        this.props.update(this.props.book, e.target.value);
    };

    render() {
        const { book } = this.props;
        const coverStyle = {
            width: 128,
            height: 193,
            backgroundImage: (typeof book.imageLinks !== "undefined") ? 'url(' + book.imageLinks.thumbnail  + ')' : ""
        };

        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={coverStyle}></div>
                    <div className="book-shelf-changer">
                        <select defaultValue={book.shelf} onChange={this.handleShelfChange}>
                            <option value="none" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{book.title ? book.title : ""}</div>
                <div className="book-authors">{book.authors ? book.authors.join(", ") : ""}</div>
            </div>
        );
    }
}

export default Book;
