import {createSlice} from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addToCart: (state,action)=>{
            // Check if item is alredy in the cart
            const itemIndex = state.findIndex(
                (item) => item.id === action.payload.id
            )

            if(itemIndex >= 0){
                // if item exists in the cart, increment the amount and total
                state[itemIndex].amount += 1
                state[itemIndex].total += state[itemIndex].price
            } else{
                // if item does not exist in the cart, add it with amount: 1
                // e.g. from { id: 1, name: "Pen", description: "It's a pen", price: "RM10" }
                // to { id: 1, name: "Pen", description: "It's a pen", price: "RM10", amount:1 }
                const newProduct = {...action.payload, amount:1,total:action.payload.price}
                console.log(newProduct)
                state.push(newProduct)
            }

        
        },

        decrementCartItem:(state,action)=>{
            // check for matching id from cart
            const itemIndex = state.findIndex(item=>item.id===action.payload.id)

            if(state[itemIndex].amount>0){
                state[itemIndex].amount -= 1
                state[itemIndex].total -= state[itemIndex].price
            }

            if(state[itemIndex].amount===0){
                const result = state.filter((item)=>item.id !== action.payload.id)
                state.splice(itemIndex,1)
            }
        },

        incrementCartItem:(state,action)=>{
            // check for matching id from cart
            const itemIndex = state.findIndex(item=>item.id===action.payload.id)

            if(state[itemIndex].amount>0){
                state[itemIndex].amount += 1
                state[itemIndex].total += state[itemIndex].price
            }
        }
    }
})

export const {addToCart,decrementCartItem,incrementCartItem} = cartSlice.actions

export default cartSlice.reducer