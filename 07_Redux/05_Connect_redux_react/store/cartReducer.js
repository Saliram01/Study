// Action types
const CARD_ADD_ITEMS = 'cart/addItem';
const CART_REMOVE_ITEM = 'cart/removeItem';
const CART_INCREASE_ITEM_QUANTITY = 'cart/increaseItemQuantity';
const CART_DECREASE_ITEM_QUANTITY = 'cart/decreaseItemQuantity';

// Action creaters
export function addCartItems(productId,quantity) {
    return {type: CARD_ADD_ITEMS, payload: {productId,quantity}};
};

export function increaseCartItemQuantity(productId) {
    return { type: CART_INCREASE_ITEM_QUANTITY,  payload: { productId }};
};

export function decreaseCartItemQuantity(productId) {
    return { type: CART_DECREASE_ITEM_QUANTITY,  payload: { productId }};
};

export function cartRemove(productId) {
    return { type: CART_REMOVE_ITEM, payload: { productId }};
}


// Reducers
export default function cartReducer(state = [], action) {
    switch(action.type) {
        case 'cart/addItem': {
           return [...state, action.payload];   
        }

        case 'cart/removeItem': {
            return state.filter((cartList) => cartList.productId !== action.payload.productId);
        }

        case 'cart/increaseItemQuantity': {
            return state.map((cartItem) => {
                if(cartItem.productId === action.payload.productId) {
                    return { ...cartItem, quantity: cartItem.quantity + 1};
                }
                return cartItem;
            });
        }

        case 'cart/decreaseItemQuantity': {
            return state.map((cartItem) => {
                if(cartItem.productId === action.payload.productId) {
                    return { ...cartItem, quantity: cartItem.quantity - 1};
                }
                return cartItem;
            });
        }

        default: {
            return state;
        }
    }
}