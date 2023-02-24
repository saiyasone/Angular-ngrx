import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { isAuthenticatedSelector } from '../../store/auth/auth.selector';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isAuthenticated: Observable<boolean>;

  constructor(private store: Store) {}

  ngOnInit() {
    this.isAuthenticated = this.store.select(isAuthenticatedSelector);
  }
}
