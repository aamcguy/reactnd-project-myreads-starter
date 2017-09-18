import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Bookshelf from './Bookshelf/Bookshelf';


class MyReads extends Component {
    render() {
       const { books, update } = this.props;

       return (
           <div className="list-books">
               <div className="list-books-title">
                   <h1>Aaron's Reads</h1>
               </div>
               <div className="list-books-content">
                   <div>
                       <div className="bookshelf">
                           <Bookshelf
                               shelfName="Currently Reading"
                               books={books.filter( book => book.shelf === "currentlyReading" )}
                               update={update}
                           />
                       </div>
                       <div className="bookshelf">
                           <Bookshelf
                               shelfName="Want to Read"
                               books={books.filter( book => book.shelf === "wantToRead" )}
                               update={update}
                           />
                       </div>
                       <div className="bookshelf">
                           <Bookshelf
                               shelfName="Read"
                               books={books.filter( book => book.shelf === "read" )}
                               update={update}
                           />
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
