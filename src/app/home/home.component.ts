import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from '../state/models/user.model';
import { Observable } from 'rxjs';
import { AppState } from '../state/app.state';
import { AuthSelectors } from '../auth/state/action-types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  isLoggedIn$ : Observable<boolean> = this._store.select(AuthSelectors.isLoggedIn);
  isLoggedOut$ : Observable<boolean> = this._store.select(AuthSelectors.isLoggedOut)
  user$ : Observable<User> = this._store.select(AuthSelectors.user);	
  

  constructor(
    private _store : Store<AppState>
    ) { }
}
