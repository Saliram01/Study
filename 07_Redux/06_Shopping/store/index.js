import { combineReducers, createStore } from 'redux';
import { decreaseCartItemQuantity, increaseCartItemQuantity, addCartItems, cartRemove } from './cartReducer';
import { addWishList, removeWishList } from './wishListReducer';

import productsReducer from './productsReducer';
import cartReducer from './cartReducer';
import wishListReducer from './wishListReducer';

const reducer = combineReducers({ 
    products : productsReducer, 
    cartItems: cartReducer, 
    wishList: wishListReducer,
});

export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());

// Cart Add
store.dispatch(addCartItems(1,1));
store.dispatch(addCartItems(2,1));
store.dispatch(addCartItems(3,1));

// Cart Remove
store.dispatch(cartRemove(3));

// Increase Cart Quantity
store.dispatch(increaseCartItemQuantity(2));
store.dispatch(increaseCartItemQuantity(2));
store.dispatch(increaseCartItemQuantity(3));

// Decrease Cart Quantity
store.dispatch(decreaseCartItemQuantity(3));

// WishList Add
store.dispatch(addWishList(1));
store.dispatch(addWishList(12));
store.dispatch(addWishList(122));

// WishList Remove
store.dispatch(removeWishList(12));
store.dispatch(removeWishList(122));;

// console.log(store.getState());