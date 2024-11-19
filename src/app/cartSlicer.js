import { createSlice } from "@reduxjs/toolkit";

export const cartSlice =  createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action)=>{
            state.items.push(action.payload)
        },

        increaseQuantity: (state, action)=>{
            let cart_item =   state.items[action.payload]

            cart_item['quantity'] += 1
            cart_item['total_price'] = cart_item['product']['price'] * cart_item['quantity']
            state.items[action.payload] = cart_item
    
        },

        decreaseQuantity: (state, action)=>{
            let cart_item = state.items[action.payload]
            if(cart_item['quantity'] > 1){
                cart_item['quantity'] -= 1
                cart_item['total_price'] = cart_item['product']['price'] * cart_item['quantity']
            }
            state.items[action.payload] = cart_item
            
        }
    }
})

export const {addItem, setTotal, increaseQuantity, decreaseQuantity} = cartSlice.actions
export default cartSlice.reducer