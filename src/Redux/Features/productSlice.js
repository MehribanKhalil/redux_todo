import { createSlice } from "@reduxjs/toolkit";


const initialState={
    value:[]
}

export const productSlice=createSlice({
    name:'products',
    initialState,
    reducers:{
        addWishlist:(state,action)=>{
            state.value.push(action.payload)
        },
        removeFromWishlist:(state,action)=>{
            state.value=state.fiter(x=>x.id !== action.payload.id)
        }
    }
})

export const {addWishlist,removeFromWishlist}=productSlice.actions
export default productSlice.reducer