import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from 'src/app/state/models/product.model';
import { selectProducts } from 'src/app/state/products/products.selectors';
import { selectUnits } from 'src/app/state/units/units.selectors';

@Component({
  selector: 'app-add-in-cart-modal',
  templateUrl: './add-in-cart-modal.component.html',
  styleUrls: ['./add-in-cart-modal.component.scss']
})
export class AddInCartModalComponent implements OnInit {

  form : FormGroup;
  products$ = this._store.select(selectProducts);
  units$ = this._store.select(selectUnits);

  constructor(
    public dialogRef: MatDialogRef<AddInCartModalComponent>,
    private _formBuilder: FormBuilder,
    private _store : Store,
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
