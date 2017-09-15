import React from 'react';
import { Route } from 'react-router-dom';
import MyReads from './MyReads';
import { Search } from './SearchMyReads';
import {getAll} from "./BooksAPI";
// import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
    state = {
        books: [],
    };

    componentDidMount () {
        let books = [];
        getAll()
            .then( bks => bks.forEach( b => books.push(b)))
            .then( () => this.setState({ books: books } ));
    }

    /*TODO: Functions I need:
     *  onUpdate()
     *  onAdd()
     *  onSearch()
     */

    render() {
        return (
            <div className="app">
                <Route exact path="/" render={() => (
                    <MyReads books={this.state.books}/>
                )}/>
                <Route path="/search" render={() => (
                    <Search/>
                )}/>
            </div>
        )
    }
}

export default BooksApp
