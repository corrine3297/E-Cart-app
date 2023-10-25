import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice=createSlice({
    name:"wishlist",
    initialState:[],
    reducers:{
        addToWishlist:(state,action)=>{
            console.log(action.payload)
            // state.push(action.payload)
            state.push(action.payload)
        },
        removeFromWishList:(state,action)=>{
            // filter is method so it has to return a value
            return state.filter(item=>item.id!=action.payload)
        
    }
}
})

export const {addToWishlist,removeFromWishList}=wishlistSlice.actions
export default wishlistSlice.reducer