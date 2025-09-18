import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { decrement, increment, reset } from './store/counter/counter.actions';
import { AsyncPipe, CommonModule } from '@angular/common';
import { AppState } from './store/app.state';
import { selectTodos } from './store/todos/todo.selectors';
import { Todo } from './models/todo';
import { addTodo, deleteTodo, updateTodo } from './store/todos/todo.actions';
import {
  FormControl,
  ReactiveFormsModule,
  FormGroup,
  FormBuilder,
} from '@angular/forms';
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
  public mot: string = '';
  public form: FormGroup;
  constructor(
    private store: Store<AppState>,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      name: [''],
    });
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

    this.todos$.pipe();
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

  submitForm() {
    if (this.form.valid) {
      let inputName = this.form.get('name')?.value;
      console.log(inputName);
    }
  }

  addTodo() {
    // recuperer la valeur du champ
    let inputName = this.form.get('name')?.value;
    this.store.dispatch(addTodo({ content: inputName }));
  }

  deleteTodo(id: any) {
    this.store.dispatch(deleteTodo({ id: id }));
  }

  public upDate(id: number, element: string) {
    console.log('upDate', element);
    this.store.dispatch(updateTodo({ id: id, content: element }));
  }
}
