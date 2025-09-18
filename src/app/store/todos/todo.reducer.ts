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
      status: state.status,
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
    // je veux mettre à jour le contenu de mon todo
    // 1- recuperer l utilisateur que je veux mettre à jour
    let userActu = {
      id: id,
      content: content,
    };

    /// 1 j'ai mon user actu
    /// 2 ce que je veux mettre à jour c'est le content
    // comment je peux le mette à jour ???
    // mettre à jour une valeur à partir d'un objet
    const newUser = { ...userActu, content: 'okokokok' };
    // 2- passer les nouvelle valeur
    console.log('newUser', newUser);
    // Pour le moment la nouvelle changé est en dur.
    //Comment faire qu'elle soit dynamique
    // 3- retourner ces nouvelles valeurs
    return {
      ...state,
      id,
      content,
    };
  })
);
