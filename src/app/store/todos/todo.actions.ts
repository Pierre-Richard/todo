import { createAction, props } from '@ngrx/store';

export const addTodo = createAction(
  '[Todo Page] add Todo',
  props<{ content: string }>()
);

export const removedTodo = createAction(
  '[Todo Page] removeTodo',
  props<{ id: any }>()
);

export const updateTodo = createAction(
  '[Todo Page] updateTodo',
  props<{ id: any; content: string }>()
);
