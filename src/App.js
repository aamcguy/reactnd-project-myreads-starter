import React from 'react';
import { Route } from 'react-router-dom';
import MyReads from './MyReads';
import { Search } from './SearchMyReads';
import * as BooksAPI from './BooksAPI'

import './App.css'

class BooksApp extends React.Component {
    state = {
        books: [],
    };

    componentDidMount () {
        let books = [];
        BooksAPI.getAll()
            .then( bks => bks.forEach( b => books.push(b)))
            .then( () => this.setState({ books: books } ));
    }

    /*TODO: Functions I need:
     *  onUpdate()
     *  onAdd()
     *  onSearch()
     */

    onUpdate = (book,newShelf) => {
        BooksAPI.update(book,newShelf);
        this.setState((prevState) => {
            for( let i = 0; i < prevState.books.length; i++ ) {
                if( prevState.books[i].id === book.id ) {
                    prevState.books[i].shelf = newShelf;
                    break; //since id's are unique
                }
            }
            return prevState;
        });
    };

    render() {
        return (
            <div className="app">
                <Route exact path="/" render={() => (
                    <MyReads
                        books={this.state.books}
                        update={this.onUpdate}
                    />
                )}/>
                <Route path="/search" render={() => (
                    <Search/>
                )}/>
            </div>
        )
    }
}

export default BooksApp
