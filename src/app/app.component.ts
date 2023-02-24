import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AutoLogin } from './store/auth/auth.action';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name: string = 'Angular';
  constructor(private store: Store) {
    store.dispatch(AutoLogin());
  }
}
