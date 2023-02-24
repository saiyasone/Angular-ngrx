import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as authActions from '../../store/auth/auth.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form = new FormGroup({
    email: new FormControl('superadmin@piggyb.com', [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl('12', [Validators.required]),
  });
  constructor(private store: Store) {}

  ngOnInit() {}

  get f() {
    return this.form.controls;
  }

  submitForm() {
    if (this.form.invalid) return this.form.markAllAsTouched();

    this.store.dispatch(
      authActions.Login({
        email: this.f['email'].value,
        password: this.f['password'].value,
      })
    );
  }
}
