import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { ShoppingListsSelectors } from '../../state/action-types';

@Component({
  selector: 'app-shopping-lists',
  templateUrl: './shopping-lists.component.html',
  styleUrls: ['./shopping-lists.component.scss']
})
export class ShoppingListsComponent implements OnInit {

  shoppingLists$ = this._store.select(ShoppingListsSelectors.selectAllShoppingLists);

  constructor(private _store :Store<AppState>) { }


  ngOnInit(): void {
  }
  onUpdateList(event){
    console.log(event);
  }
}
