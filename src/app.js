'use strict';
//React
import React from 'react';
import { render } from 'react-dom';
import {Provider} from 'react-redux';

import {Route, Router, IndexRoute, browserHistory} from 'react-router';

import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';

//import combine reducers
import reducers from './reducers/index';

//import the actions
import { addToCart } from './actions/cartActions';
import { postBook, deleteBook, updateBook } from './actions/booksActions';

//step 1 create the store
const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);

import BookList from './components/booksList';
import Cart from './components/cart';
import BooksForm from './components/booksForm';
import Main from './main';

const Routes = (
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Main}>
                <IndexRoute component={BookList} />
                <Route path="/admin" component={BooksForm}/>
                <Route path="/cart" component={Cart}/>
            </Route>
        </Router>
    </Provider>
)

render(
    Routes,
    document.getElementById('app')
);

//step 2 create and dispatch actions

// //DISPATCH a second action
// store.dispatch(postBook(
//     [{
//         id: 3,
//         title: 'This is third book title',
//         description: 'third Book description',
//         price: '3 dollar'
//     }]
// ));

// // Delete  a book
// store.dispatch(deleteBook(
//     {
//         id: 1
//     }
// ));

// //update a book
// store.dispatch(updateBook({
//     id: 2,
//     title: 'updated title',
//     description: 'updated description',
//     price: 'updated price 4 dollar'
// }))

// //--------Cart action---------------
// //ADD to cart
// store.dispatch(addToCart([{ id: 2 }]));