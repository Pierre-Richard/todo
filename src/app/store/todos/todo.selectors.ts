import { createSelector } from '@ngrx/store';
import { TodoState } from './todo.reducer';
import { AppState } from '../app.state';

export const selectTodoState = (state: AppState) => state.todo;

export const selectTodos = createSelector(selectTodoState, (s) => s.todos);
