"use strict";

export function addToCart(book){
    return {
        type: "ADD_TO_CART",
        payload: book
    }
}

export function deleteCartItem(cart){
    return {
        type: "DELETE_TO_CART",
        payload: cart
    }
}

export function updateCart(_id, unit){
    return {
        type: "UPDATE_CART",
        _id: _id,
        unit: unit
    }
}