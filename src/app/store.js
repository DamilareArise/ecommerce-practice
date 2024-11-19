import { configureStore } from '@reduxjs/toolkit'
import productReducer from './productSlicer'
import cartReducer from './cartSlicer'

export const store = configureStore({
    reducer: {
        product: productReducer,
        cart: cartReducer
    }
})