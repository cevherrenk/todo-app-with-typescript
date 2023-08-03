import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface Todo {
      id: number;
      title: string;
      completed: boolean;
}

const initialState: Todo[] = [];

const todoSlice = createSlice({
      name: "todos",
      initialState,
      reducers: {
            add: (state, action: PayloadAction<string>) => { 
                  const todo: Todo = {id: state.length + 1 ,title: action.payload, completed: false};
                  state.push(todo);
            },
            remove: (state, action: PayloadAction<number>) => {
                  return state.filter((el,idx) => el.id !== action.payload)
            },
            toggleCompleted: (state, action: PayloadAction<number>) => {
                  return state.map(todo => todo.id === action.payload ? {...todo,completed: !todo.completed}: todo); 
            } 
      }
});

export default todoSlice.reducer;

export const { add,remove,toggleCompleted } = todoSlice.actions;


