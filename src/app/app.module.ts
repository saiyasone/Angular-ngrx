import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { AppReducer } from './store/index.store';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule } from '@angular/router';
import { ProductComponent } from './pages/product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffect } from './effects/product.effect';
import { LoginComponent } from './pages/login/login.component';
import { AuthEffect } from './effects/auth.effect';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'product',
        component: ProductComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
    ]),
    HttpClientModule,
    StoreModule.forRoot(AppReducer),
    EffectsModule.forRoot([ProductEffect, AuthEffect]),
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProductComponent,
    LoginComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
