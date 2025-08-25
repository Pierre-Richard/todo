import { TodoState } from './todos/todo.reducer';

export interface AppState {
  counter: number;
  todo: TodoState;
}
