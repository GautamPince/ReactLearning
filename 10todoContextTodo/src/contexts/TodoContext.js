import { createContext, useContext } from "react";
export const TodoContext = createContext({
   // todos: [
   //    {
   //       id: 1,
   //       todo: "Todo msg",
   //       completed: false,
   //    },

   // ],
   // addTodo: (todo) => { },
   // updateTodo: (id, todo) => { },
   // removeTodo: (id) => { },
   // toggleComplete: (id) => { },
   // // clearCompleted: () => { },
   todos: [],
   addTodo: () => { throw new Error("addTodo not implemented"); },
   updateTodo: () => { throw new Error("updateTodo not implemented"); },
   removeTodo: () => { throw new Error("removeTodo not implemented"); },
   toggleComplete: () => { throw new Error("toggleComplete not implemented"); },
});


export const useTodo = () => {
   return useContext(TodoContext);
}
export const TodoProvider = TodoContext.Provider;

