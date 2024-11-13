import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice({
    name: 'product',
    initialState: {
        products: [],
    },
    reducers: {
        getProduct: (state, action)=>{
            state.products = action.payload
        }
    }
})

export const {getProduct} = productSlice.actions
export default productSlice.reducer