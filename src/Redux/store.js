import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./Features/categoriesSlice";
import todoReducer from "./Features/todoSlice";
import counterReducer from "./Features/counterSlice";

export const store=configureStore({
    reducer:{
        todos:todoReducer,
        categories:categoriesReducer,
        counterApp:counterReducer
    }
})