import { createSlice } from "@reduxjs/toolkit";

const initialState={
    value:0
}
export const counterSlice=createSlice({
    name:'counter',
    initialState,
    reducers:{
       artir:(state)=>{
        state.value=state.value+1
       },
       azalt:(state)=>{
        state.value=state.value-1
       }
    }
})

export const {artir,azalt}=counterSlice.actions
export default counterSlice.reducer