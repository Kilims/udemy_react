'use strict';
//React
import React from 'react';
import { render } from 'react-dom';
import {Provider} from 'react-redux';


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
import Menu from './components/menu';
import Footer from './components/footer';

render(
    <Provider store={store}>
        <div>
            <Menu />
            <BookList />
            <Footer />
        </div>
    </Provider>,
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