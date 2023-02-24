import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { todoItemState, todoState } from '../../models/todo.model';

// counter store
import * as counterActions from '../../store/counter/counter.action';
import { counterState } from '../../store/counter/counter.reducer';
import * as counterSelector from '../../store/counter/counter.selector';

// todo store
import * as todoActions from '../../store/todo/todo.action';
import * as todoSelectors from '../../store/todo/todo.selector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  id: string = '';
  title: string = '';
  counter: number = 0;
  isCreate = false;
  counter$: Observable<number>;
  todos$: Observable<todoItemState[]>;
  todos: todoItemState[] = [];

  // { counter: counterState }
  // counter => ເປັນຊື່ key ທີ່ຕັ້ງໄວ້ໃນ app.module.ts
  constructor(
    private storeDemo: Store<{ counter: counterState; todo: todoState }>,
    private store: Store
  ) {}

  ngOnInit() {
    this.counter$ = this.storeDemo
      .select('counter')
      .pipe(map((el) => el.counter));
    this.store.select(counterSelector.getCounterSelector).subscribe((data) => {
      this.counter = data;
    });

    // this.storeDemo.select('todo').subscribe((data) => {
    //   console.log(data);
    // });
    this.todos$ = this.store.select(todoSelectors.todoSelector);
  }

  onIncrease() {
    this.store.dispatch(counterActions.increase());
  }
  onDecrease() {
    this.store.dispatch(counterActions.decrease());
  }
  onReset() {
    this.store.dispatch(counterActions.reset());
  }

  submitTodo() {
    const todo: todoItemState = {
      id: (Math.random() * 100).toString(),
      title: this.title || 'Hello World',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, sed?',
    };

    if (this.isCreate) {
      todo.id = this.id;
      this.store.dispatch(todoActions.EDIT_TODO(todo));
    } else {
      this.store.dispatch(todoActions.ADD_TODO(todo));
    }
    this.title = '';
  }

  handleData(todo: todoItemState) {
    this.id = todo.id;
    this.title = todo.title;
    this.isCreate = true;
  }

  delTodo(todoId: string) {
    this.store.dispatch(
      todoActions.DEL_TODO({
        id: todoId,
      })
    );
  }
}
