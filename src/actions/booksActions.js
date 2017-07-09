"use strict";

//POST a book
export function postBook(book){
    return {
        type: "POST_BOOK",
        payload: book
    }
}

//Delete a book
export function deleteBook(id){
    return {
        type: "DELETE_BOOK",
        payload: id
    }
}

//update a book
export function updateBook(book){
    return {
        type: "UPDATE_BOOK",
        payload: book
    }
}