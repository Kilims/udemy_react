'use strict';
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


store.subscribe(function () {
    console.log('current state is : ', store.getState());
    //console.log('current state is : ', store.getState()[1].price);
});

//step 2 create and dispatch actions
store.dispatch(postBook(
    [
        {
            id: 1,
            title: 'This is book title',
            description: 'Book description',
            price: '1 dollar'
        },
        {
            id: 2,
            title: 'This is second book title',
            description: 'Second Book description',
            price: '2 dollar'
        }
    ]
))

//DISPATCH a second action
store.dispatch(postBook(
    [{
        id: 3,
        title: 'This is third book title',
        description: 'third Book description',
        price: '3 dollar'
    }]
));

// Delete  a book
store.dispatch(deleteBook(
    {
        id: 1
    }
));

//update a book
store.dispatch(updateBook({
    id: 2,
    title: 'updated title',
    description: 'updated description',
    price: 'updated price 4 dollar'
}))

//--------Cart action---------------
//ADD to cart
store.dispatch(addToCart([{ id: 2 }]));