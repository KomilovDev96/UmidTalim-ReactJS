import { configureStore } from '@reduxjs/toolkit'
import OthersSlice from './features/othersReducers/othersSlice';
export const store = configureStore({
    devTools: true,
    reducer: {
       other:  OthersSlice
    },
})