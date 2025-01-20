import { combineReducers, createStore } from 'redux';
import { CARD_ADD_ITEMS, CART_REMOVE_ITEM, CART_INCREASE_ITEM_QUANTITY, CART_DECREASE_ITEM_QUANTITY } from './cartReducer';
import { WISHLIST_ADD_ITEMS, WISHLIST_REMOVE_ITEM } from './wishListReducer';

import productsReducer from './productsReducer';
import cartReducer from './cartReducer';
import wishListReducer from './wishListReducer';

const reducer = combineReducers({ 
    products : productsReducer, 
    cartItems: cartReducer, 
    wishList: wishListReducer,
});

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());

// Cart Add
store.dispatch({type: CARD_ADD_ITEMS, payload: {productId: 1,quantity: 1}});
store.dispatch({type: CARD_ADD_ITEMS, payload: {productId: 2,quantity: 1}});
store.dispatch({type: CARD_ADD_ITEMS, payload: {productId: 3,quantity: 1}});

// Cart Remove
store.dispatch({type: CART_REMOVE_ITEM, payload: {productId: 3}});

// Increase Cart Quantity
store.dispatch({ type: CART_INCREASE_ITEM_QUANTITY,  payload: {productId: 2}});
store.dispatch({ type: CART_INCREASE_ITEM_QUANTITY,  payload: {productId: 2}});
store.dispatch({ type: CART_INCREASE_ITEM_QUANTITY,  payload: {productId: 3}});
store.dispatch({ type: CART_DECREASE_ITEM_QUANTITY,  payload: {productId: 3}});

// WishList Add
store.dispatch({type: WISHLIST_ADD_ITEMS, payload: {productId: 1}});
store.dispatch({type: WISHLIST_ADD_ITEMS, payload: {productId: 12}});
store.dispatch({type: WISHLIST_ADD_ITEMS, payload: {productId: 122}});

// WishList Remove
store.dispatch({type: WISHLIST_REMOVE_ITEM, payload: {productId: 12}});
store.dispatch({type: WISHLIST_REMOVE_ITEM, payload: {productId: 122}});

console.log(store.getState());