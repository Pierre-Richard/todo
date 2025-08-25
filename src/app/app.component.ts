import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from './store/counter/counter.actions';
import { AsyncPipe, CommonModule } from '@angular/common';
import { AppState } from './store/app.state';
import { selectTodos } from './store/todos/todo.selectors';
import { Todo } from './models/todo';
import { addTodo } from './store/todos/todo.actions';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  imports: [AsyncPipe, ReactiveFormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'todo';
  count$: Observable<number>;
  todos$: Observable<Todo[]>;

  constructor(private store: Store<AppState>) {
    this.count$ = store.select('counter');
    // ici je lis une partie de mon state
    this.todos$ = this.store.select(selectTodos);
  }

  increment() {
    // TODO: Dispatch an increment action
    // this.store.dispatch(increment({ msg: 'message ajouté' }));
    // this.count$.subscribe((value) => {
    //   console.log('value from selector', value);
    //   return value;
    // });
  }

  decrement() {
    console.log('todo', this.todos$);
    // TODO: Dispatch a decrement action
    this.store.dispatch(decrement());
  }

  reset() {
    // TODO: Dispatch a reset action
    this.store.dispatch(reset());
  }
  // créer un form reactive
  // recuperer la valeur du champ
  // inserer cette dans le dispatch
  addTodo() {
    this.store.dispatch(addTodo({ content: 'okokokokok' }));
  }
}
