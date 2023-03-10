import { createReducer, on } from '@ngrx/store';
import { todoState } from '../../models/todo.model';
import * as todoActions from './todo.action';

const initialTodoState: todoState = {
  todos: [],
  totalItem: 0,
};

export const todoReducer = createReducer(
  initialTodoState,
  on(todoActions.ADD_TODO, (state, action) => {
    const newTodo = [...state.todos];
    newTodo.unshift(action);
    return { ...state, todos: newTodo };
  }),
  on(todoActions.EDIT_TODO, (state, action) => {
    const oldState = [...state.todos];
    const index = oldState.findIndex((el) => el.id === action.id);
    const updateTodo = {
      ...oldState[index],
      ...action,
    };

    const updateTodos = [...oldState];
    updateTodos[index] = updateTodo;

    return { ...state, todos: updateTodos };
  }),
  on(todoActions.DEL_TODO, (state, action) => {
    const oldState = [...state.todos];
    const updateTodo = oldState.filter((el) => el.id !== action.id);
    return {
      ...state,
      todos: updateTodo,
    };
  })
);
