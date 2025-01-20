
export const CARD_ADD_ITEMS = 'cart/addItem';
export const CART_REMOVE_ITEM = 'cart/removeItem';
export const CART_INCREASE_ITEM_QUANTITY = 'cart/increaseItemQuantity';
export const CART_DECREASE_ITEM_QUANTITY = 'cart/decreaseItemQuantity';

export default function cartReducer(state = [], action) {
    switch(action.type) {
        case 'CARD_ADD_ITEMS': {
           return [...state, action.payload];   
        }

        case 'CART_REMOVE_ITEM': {
            return state.filter((cartList) => cartList.productId !== action.payload.productId);
        }

        case 'CART_INCREASE_ITEM_QUANTITY': {
            return state.map((cartItem) => {
                if(cartItem.productId === action.payload.productId) {
                    return { ...cartItem, quantity: cartItem.quantity + 1};
                }
                return cartItem;
            });
        }

        case 'CART_DECREASE_ITEM_QUANTITY': {
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