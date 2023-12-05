import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const baseUrl='https://northwind.vercel.app/api/categories'


export const FetchCategories=createAsyncThunk(
    'categories/FetchCategories',
    async ()=>{
        const res= await fetch("https://northwind.vercel.app/api/categories")
        return res.json()
    }
)

export const EditCategory=createAsyncThunk(
    'categories/EditCategory',
    async ({id,category})=>{
        const res=await fetch (`https://northwind.vercel.app/api/categories/${id}`,{
            method:'PUT',
            headers:{
                'Content-Type':'aplication/json'
            },
            body:JSON.stringify(category)
        })
       return res.json()
    }
)

export const DeleteCategory=createAsyncThunk(
    'categories/DeleteCategory',
    async (id)=>{
        const res=await fetch (`https://northwind.vercel.app/api/categories/${id}`,{
            method:'DELETE'
        })
       return id.json()
    }
)

export const CategorySlice=createSlice({
    name:'category',
    initialState:{
        entity:[],
        loading:false,
        error:null
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder 
        .addCase(FetchCategories.pending,(state)=>{
            state.loading=true
        })
        .addCase(FetchCategories.fulfilled,(state,action)=>{
            state.loading=false
            state.entity=action.payload
        })
        .addCase(FetchCategories.rejected,(state,action)=>{
            state.loading=false
            state.error=action.error.message
        })


        // edit
        .addCase(EditCategory.pending,(state)=>{
            state.loading=true
        })
        .addCase(EditCategory.fulfilled,(state,action)=>{
            state.loading=false
            const index=state.entity.findIndex(category=>category.id===action.payload.id)
            if (index!==-1) {
                state.entity[index]=action.payload
            }
            
            // state.entity.push(action.payload)
        })
        .addCase(EditCategory.rejected,(state,action)=>{
            state.loading=false
            state.error=action.error.message
        })

        // delete
        .addCase(DeleteCategory.pending,(state)=>{
            state.loading=true
        })
        .addCase(DeleteCategory.fulfilled,(state,action)=>{
            state.loading=false
            state.entity.filter(category=>category.id !== action.payload)
            
            // state.entity.push(action.payload)
        })
        .addCase(DeleteCategory.rejected,(state,action)=>{
            state.loading=false
            state.error=action.error.message
        })
    }
})


export default CategorySlice.reducer