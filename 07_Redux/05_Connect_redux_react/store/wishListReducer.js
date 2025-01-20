// Action type
const WISHLIST_ADD_ITEMS = 'wishList/addItem';
const WISHLIST_REMOVE_ITEM = 'wishList/removeItem';

// Action creater
export function addWishList(productId) {
    return {type: WISHLIST_ADD_ITEMS, payload: {productId}};
};

export function removeWishList(productId) {
    return {type: WISHLIST_REMOVE_ITEM, payload: {productId}};
}

// Reducers
export default function wishListReducer(state = [], action) {
    switch(action.type) {
        case 'wishList/addItem': {
            return [...state, action.payload]
        }

        case 'wishList/removeItem': {
            return state.filter((wList) => wList.productId !== action.payload.productId);
        }

        default: {
            return state;
        }
    }
}