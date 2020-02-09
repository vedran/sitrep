import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    allIds: [],
    byId: {}
  },
  reducers: {
    loadTodos(state, { payload: todos }) {
      todos.map(todo => {
        state.byId[todo.id] = todo;
        state.allIds.push(todo.id);
      });
    },
    addTodo(state, { payload: todo }) {
      state.byId[todo.id] = todo;
      state.allIds.push(todo.id);
    }
  }
});

export const { loadTodos, addTodo } = todosSlice.actions;
export default todosSlice.reducer;
