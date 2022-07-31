import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { ReducerManager, StoreModule } from '@ngrx/store';
import { productsInListReducer } from '../state/shopping-list.reducer';

import { CartService } from './cart.service';

describe('CartService', () => {
  let service: CartService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports : [ 
      HttpClientModule,
      StoreModule.forRoot([]),
      
    ]});
    service = TestBed.inject(CartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
