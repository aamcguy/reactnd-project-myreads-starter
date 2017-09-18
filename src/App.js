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
        BooksAPI.getAll()
            .then((books) => this.setState({books: [...books]}))
    };

    onUpdate = (book,newShelf) => {
        BooksAPI.update(book,newShelf);

        this.setState((prevState) => {
            let foundIt = false;
            for( let i = 0; i < prevState.books.length; i++ ) {
                if( prevState.books[i].id === book.id ) {
                    if( newShelf === "none" ) {
                        prevState.books = prevState.books.filter((bk) => bk.id !== book.id);
                    } else {
                        foundIt = true;
                        prevState.books[i].shelf = newShelf;
                    }
                    return prevState;
                }
            }

            if( !foundIt && newShelf !== "none" ) {
                BooksAPI.get(book.id).then((book) => prevState.books.push(book));
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
                    <Search
                        books={this.state.books}
                        update={this.onUpdate}
                    />
                )}/>
            </div>
        )
    }
}

export default BooksApp
