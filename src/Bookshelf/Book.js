import React, {Component} from 'react';

class Book extends Component {

    render() {
        const { title, authors, thumbUrl, shelf} = this.props;
        const coverStyle = {
            width: 128,
            height: 193,
            backgroundImage: 'url(' + thumbUrl + ')',
        };
        const selection = {
            cr: (shelf === "currentlyReading"),
            w2r: (shelf === "wantToRead"),
            read: (shelf === "read"),
            none: (shelf === "none")
        };

        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={coverStyle}></div>
                    <div className="book-shelf-changer">
                        <select>
                            <option value="none" disabled>Move to...</option>
                            <option value="currentlyReading" selected={selection.cr}>Currently Reading</option>
                            <option value="wantToRead" selected={selection.w2r}>Want to Read</option>
                            <option value="read" selected={selection.read}>Read</option>
                            <option value="none" selected={selection.none}>None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{title}</div>
                <div className="book-authors">{authors.join(", ")}</div>
            </div>
        );
    }
}

export default Book;
