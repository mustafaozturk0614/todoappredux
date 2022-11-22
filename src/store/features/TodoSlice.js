import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  isLoadingFirst: true,
  isLoading: true,
  active: 0,
};

export const fetchTodo = createAsyncThunk("todo/fetcth", async (payload) => {
  try {
    let list = [];
    await fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => {
        list = [...data];
      });
    return list;
  } catch (error) {
    console.log(error);
  }
});

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
    changeActive: (state, action) => {
      state.active === 0 ? (state.active = 1) : (state.active = 0);
    },
    setActive: (state, action) => {
      state.active = action.payload;
    },
  },
  extraReducers: (build) => {
    build.addCase(fetchTodo.fulfilled, (state, action) => {
      state.todos = action.payload.sort((a, b) => b.id - a.id);
      state.isLoading = false;
      state.isLoadingFirst = false;
    });

    build.addCase(fetchTodo.pending, (state) => {
      state.isLoading = true;
      state.isLoadingFirst = true;
    });

    build.addCase(fetchTodo.rejected, (state) => {});
  },
});

export const { addTodo, deleteTodo, setActive, editTodo, changeActive } =
  todoSlice.actions;

export default todoSlice.reducer;
