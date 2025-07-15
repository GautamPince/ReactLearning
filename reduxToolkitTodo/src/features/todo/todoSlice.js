import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
   todos: [{ id: 1, text: "Learn Redux Toolkit", completed: false }],
};
export const todoSlice = createSlice({
   name: "todo",
   initialState,
   // The `reducers` field lets us define reducers and generate associated actions
   // it contain properties and functions
   reducers: {
      addTodo: (state, action) => {
         const todo = {
            id: nanoid(),
            text: action.payload

         }
         state.todos.push(todo)
      },
      removeTodo: (state, action) => {
         state.todos = state.todos.filter((todo) => todo.id != action.payload)
      },
      // updateTodo : (state,action)=>{

      // },
   }
})
export const { addTodo, removeTodo } = todoSlice.actions

export default todoSlice.reducer