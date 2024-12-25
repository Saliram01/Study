import { configureStore } from '@reduxjs/toolkit';
import privacySlice from './PrivacySlice';
import slice from './Slice';


const store = configureStore({reducer : {
    counter : slice.reducer,
    privacy : privacySlice.reducer
}});
export default store;