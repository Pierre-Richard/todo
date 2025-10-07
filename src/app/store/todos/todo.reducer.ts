import { createReducer, on } from '@ngrx/store';
import { addTodo, deleteTodo, updateTodo } from './todo.actions';
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
    };
  }),

  on(deleteTodo, (state, { id }) => {
    const filteredTab = state.todos.filter((todo) => todo.id !== id);
    return {
      ...state,
      todos: filteredTab,
    };
  }),

  on(updateTodo, (state, { id, content }) => {
    // 1- recuperer le todo que je veux mettre à jour
    let todo = state.todos.find((todo) => todo.id === id);
    //
    if (todo) {
      // 2- mon nouveau todo
      const updatedTodo = {
        ...todo,
        title: content,
      };
      let newTodos = state.todos.map((a) => (a.id === id ? updatedTodo : a));
      console.log('newTodos arrrh', newTodos);
      return {
        ...state,
        todos: newTodos,
      };
    }
    return {
      ...state,
      todos: state.todos,
    };
  })
);
