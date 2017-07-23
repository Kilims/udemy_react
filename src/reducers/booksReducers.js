"use strict";

export function booksReducers(state = {
    books:
    [
        {
            _id: 1,
            title: 'Title: Harry 1',
            description: 'Book description',
            price: '1 dollar'
        },
        {
            _id: 2,
            title: 'Title: Harry 2',
            description: 'Second Book description',
            price: '2 dollar'
        }
    ]
}, action) {
    switch (action.type) {
        case "GET_BOOKS":
            return {
                ...state, books:[...state.books]
            }
        case "POST_BOOK":
            // let books = state.books.concat(action.payload);
            // return {books};
            return {books:[...state.books, ...action.payload]}            
        case "DELETE_BOOK":
            const currentBookToDelete = [...state.books]

            const indexToDelete = currentBookToDelete.findIndex(
                function(book){
                    return book._id === action.payload._id;
                }
            )

            return {books:[...currentBookToDelete.slice(0, indexToDelete), ...currentBookToDelete.slice(indexToDelete + 1)]}
        case "UPDATE_BOOK":
            const currentBookToUpdate = [...state.books]

            const indexToUpdate = currentBookToUpdate.findIndex(
                function(book){
                    return book._id === action.payload._id;
                }
            )

            const newBookToUpdate = {
                ...currentBookToUpdate[indexToUpdate],
                title: action.payload.title
            }

            console.log('what is newBookToUpdate ' + newBookToUpdate);

            return {books:[...currentBookToUpdate.slice(0, indexToUpdate), newBookToUpdate, ...currentBookToUpdate.slice(indexToUpdate + 1)]}

        default:
            break;
    }
    return state
}


