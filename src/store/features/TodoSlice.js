import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  isLoadingFirst: false,
  isLoading: false,
  active: 0,
};

const todoSlice = createSlice({
  name: "todo",

  initialState: initialState,

  reducers: {
    addTodo: (state, action) => {
      //state.todos.unshift(action.payload);
      state.todos = [action.payload, ...state.todos];
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    editTodo: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    },
    setActive: (state, action) => {
      state.active = action.payload;
    },
  },
});

export const { addTodo, deleteTodo, setActive, editTodo } = todoSlice.actions;

export default todoSlice.reducer;
