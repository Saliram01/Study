import { createStore } from 'redux';
import products from './productList';

let initialState = {
    products: products,
    cartItems: [],
    wishList: [],
}

// ctrl + d -> used to select same name 
const CARD_ADD_ITEMS = 'cart/addItem';
const CART_REMOVE_ITEM = 'cart/removeItem';
const CART_INCREASE_ITEM_QUANTITY = 'cart/increaseItemQuantity';
const CART_Decrease_ITEM_QUANTITY = 'cart/decreaseItemQuantity';

const WISHLIST_ADD_ITEMS = 'wishList/addItem';
const WISHLIST_REMOVE_ITEM = 'wishList/removeItem';

function reducer(state = initialState, action) {
    switch(action.type) {
        case 'CARD_ADD_ITEMS': {
           return {...state, cartItems:[...state.cartItems, action.payload]};   
        }

        case 'CART_REMOVE_ITEM': {
            return {
                ...state, cartItems: state.cartItems.filter((cartList) => cartList.productId !== action.payload.productId),
            }
        }

        case 'CART_INCREASE_ITEM_QUANTITY': {
            return {...state, cartItems: state.cartItems.map((cartItem) => {
                if(cartItem.productId === action.payload.productId) {
                    return { ...cartItem, quantity: cartItem.quantity + 1};
                }
                return cartItem;
            })};
        }

        case 'CART_DECREASE_ITEM_QUANTITY': {
            return {...state, cartItems: state.cartItems.map((cartItem) => {
                if(cartItem.productId === action.payload.productId) {
                    return { ...cartItem, quantity: cartItem.quantity - 1};
                }
                return cartItem;
            })};
        }

        case 'WISHLIST_ADD_ITEMS': {
            return {...state, wishList: [...state.wishList, action.payload]}
        }

        case 'WISHLIST_REMOVE_ITEM': {
            return {
                ...state, wishList: state.wishList.filter((wList) => wList.productId !== action.payload.productId),
            }
        }

        default: {
            return state;
        }
    }
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());

// Cart Add
store.dispatch({type: 'CARD_ADD_ITEMS', payload: {productId: 1,quantity: 1}});
store.dispatch({type: 'CARD_ADD_ITEMS', payload: {productId: 2,quantity: 1}});
store.dispatch({type: 'CARD_ADD_ITEMS', payload: {productId: 3,quantity: 1}});

// Cart Remove
store.dispatch({type: 'CARD_REMOVE_ITEMS', payload: {productId: 3}});

// Increase Cart Quantity
store.dispatch({ type: 'CART_INCREASE_ITEM_QUANTITY',  payload: {productId: 2}});
store.dispatch({ type: 'CART_INCREASE_ITEM_QUANTITY',  payload: {productId: 2}});
store.dispatch({ type: 'CART_INCREASE_ITEM_QUANTITY',  payload: {productId: 3}});
store.dispatch({ type: 'CART_DECREASE_ITEM_QUANTITY',  payload: {productId: 3}});

// WishList Add
store.dispatch({type: 'WISHLIST_ADD_ITEMS', payload: {productId: 1}});
store.dispatch({type: 'WISHLIST_ADD_ITEMS', payload: {productId: 12}});
store.dispatch({type: 'WISHLIST_ADD_ITEMS', payload: {productId: 122}});

// WishList Remove
store.dispatch({type: 'WISHLIST_REMOVE_ITEM', payload: {productId: 12}});
store.dispatch({type: 'WISHLIST_REMOVE_ITEM', payload: {productId: 122}});

console.log(store.getState());