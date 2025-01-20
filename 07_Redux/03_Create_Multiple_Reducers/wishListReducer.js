
export const WISHLIST_ADD_ITEMS = 'wishList/addItem';
export const WISHLIST_REMOVE_ITEM = 'wishList/removeItem';

export default function wishListReducer(state = [], action) {
    switch(action.type) {
        case 'WISHLIST_ADD_ITEMS': {
            return [...state.wishList, action.payload]
        }

        case 'WISHLIST_REMOVE_ITEM': {
            return state.filter((wList) => wList.productId !== action.payload.productId);
        }

        default: {
            return state;
        }
    }
}