import React, {Component} from 'react';
import Book from './Book';


class Bookshelf extends Component {

    render() {
        const {shelf_name, books, update} = this.props;
        // Props: shelf_name
        // State: Array of Books
        //      Book:
        //
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{shelf_name}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.map((book) =>
                            <li>
                                <Book
                                    title={book.title}
                                    authors={book.authors}
                                    thumbUrl={book.imageLinks.thumbnail}
                                    shelf={book.shelf}
                                    update={update}
                                />
                            </li>
                        )}
                    </ol>
                </div>
            </div>
        );
    }
}

export default Bookshelf;
