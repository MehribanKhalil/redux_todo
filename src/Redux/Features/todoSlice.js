import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  todoVal: [],
};
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todoVal.push(action.payload);
    },
    editTodo: (state, action) => {
      const element = state.todoVal.find((x) => x.id === action.payload.id);
      if (element) {
        element.inpText = action.payload.text;
      }
    },
    deleteTodo: (state, action) => {
      state.todoVal = state.todoVal.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { addTodo, deleteTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;
