import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/state/app.state';
import { Product } from 'src/app/state/models/product.model';
//import { selectProducts } from 'src/app/products/state/products.selectors';
import { selectUnits } from 'src/app/state/units/units.selectors';
import { ProductSelectors } from 'src/app/products/state/actions-types';

@Component({
  selector: 'app-add-in-cart-modal',
  templateUrl: './add-in-cart-modal.component.html',
  styleUrls: ['./add-in-cart-modal.component.scss']
})
export class AddInCartModalComponent implements OnInit {

  form : FormGroup;
  products$ = this._store.select(ProductSelectors.selectAllProducts);
  units$ = this._store.select(selectUnits);

  constructor(
    public dialogRef: MatDialogRef<AddInCartModalComponent>,
    private _formBuilder: FormBuilder,
    private _store: Store<AppState>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      productId : [this.data.productId,[Validators.required]],
      quantity: [1,[Validators.required,Validators.min(1)]],
      unitId: [null,[Validators.required]],
    });
    
  }

  onNoClick(){
    this.dialogRef.close();
  }
}
