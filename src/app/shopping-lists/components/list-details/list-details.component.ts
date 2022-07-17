import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { ShoppingListsSelectors } from '../../state/action-types';

@Component({
  selector: 'app-list-details',
  templateUrl: './list-details.component.html',
  styleUrls: ['./list-details.component.scss']
})
export class ListDetailsComponent implements OnInit {

  shoppingLists$ = this._store.select(ShoppingListsSelectors.selectAllShoppingLists);

  constructor(private _store :Store<AppState>) { }

  ngOnInit(): void {
  }

}
