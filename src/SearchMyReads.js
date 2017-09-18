import React,{ Component } from 'react';
import {Link} from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Book from './Bookshelf/Book';

export class Search extends Component {
    state = {
        qBooks: []
    };

    handleSearch = (e) => {
        if( e.target.value === "" ) {
            this.setState({qBooks: []});
        } else {
            BooksAPI.search(e.target.value, 20)
                .then((books) => {
                    if( books.length === 0 ) {
                        this.setState({qBooks: []});
                    } else {
                        this.setState({qBooks: [...books].map(this.addShelf)})
                    }
                })
                .then(() => console.log(this.state.qBooks));
        }
    };

    addShelf = (book) => {
        for(let i = 0; i < this.props.books.length; i++ ) {
            if( book.id === this.props.books[i].id ) {
                book.shelf = this.props.books[i].shelf;
                return book;
            }
        }
        book.shelf = "none";
        return book;
    };

    render() {
       const {update} = this.props;

       return (

           <div className="search-books">
               <div className="search-books-bar">
                   <Link className="close-search" to="/" />
                   <div className="search-books-input-wrapper">
                       {/*
                                    NOTES: The search from BooksAPI is limited to a particular set of search terms.
                                    You can find these search terms here:
                                    https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                                    However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                                    you don't find a specific author or title. Every search is limited by search terms.
                                */}
                       <input type="text" placeholder="Search by title or author" onChange={this.handleSearch}/>

                   </div>
               </div>
               <div className="search-books-results">
                   <ol className="books-grid">
                       { this.state.qBooks.map((book) => (
                           <li key={book.id}>
                               <Book book={book} update={update}/>
                           </li>
                       ))}
                   </ol>
               </div>
           </div>
       );
    }
}

