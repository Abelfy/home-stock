import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';


@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {

  @Input() productsInCart: ReadonlyArray<any> = [];
  
  constructor(
    private _store: Store<AppState>,
  ) { }


  ngOnInit(): void {
  }

}
