import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import BookShelf from './Bookshelf/Bookshelf';


class MyReads extends Component {
    render() {
       const { books } = this.props;

       return (
           <div className="list-books">
               <div className="list-books-title">
                   <h1>Aaron's Reads</h1>
               </div>
               <div className="list-books-content">
                   <div>
                       <div className="bookshelf">
                           <BookShelf shelf_name="Currently Reading" books={books.filter( book => book.shelf === "currentlyReading" )}/>
                       </div>
                       <div className="bookshelf">
                           <BookShelf shelf_name="Want to Read" books={books.filter( book => book.shelf === "wantToRead" )}/>
                       </div>
                       <div className="bookshelf">
                           <BookShelf shelf_name="Read" books={books.filter( book => book.shelf === "read" )}/>
                       </div>
                   </div>
               </div>
               <div className="open-search">
                   <Link to="/search">Add a book</Link>
               </div>
           </div>
       )
    }
}

export default MyReads;
