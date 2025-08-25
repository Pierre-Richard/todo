import { createReducer, on } from '@ngrx/store';
import { addTodo, removedTodo } from './todo.actions';
import { Todo } from '../../models/todo';

export interface TodoState {
  todos: Todo[];
  error: string;
  status: 'pending' | 'loading' | 'error' | 'success';
}

export const initialState: TodoState = {
  todos: [],
  error: '',
  status: 'pending',
};

export const todoReducer = createReducer(
  initialState,
  on(addTodo, (state, { content }) => {
    const newTodo: Todo = {
      id: Date.now().toString(),
      title: content,
      completed: true,
    };
    console.log('newTodo', newTodo);

    return {
      ...state,
      todos: [...state.todos, newTodo],
      status: state.status,
    };
  }),

  on(removedTodo, (state, { id }) => {
    const filteredTab = state.todos.filter((todo) => todo.id !== id);
    return {
      ...state,
      todos: filteredTab,
    };
  })
);
