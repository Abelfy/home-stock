import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { ProductSelectors, UnitSelectors } from 'src/app/products/store';
import { AppState } from 'src/app/store/app.state';


@Component({
  selector: 'app-add-in-cart-modal',
  templateUrl: './add-in-cart-modal.component.html',
  styleUrls: ['./add-in-cart-modal.component.scss']
})
export class AddInCartModalComponent implements OnInit {

  form : FormGroup;
  products$ = this._store.select(ProductSelectors.selectAllProducts);
  units$ = this._store.select(UnitSelectors.selectAllUnits);

  constructor(
    public dialogRef: MatDialogRef<AddInCartModalComponent>,
    private _formBuilder: FormBuilder,
    private _store: Store<AppState>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      product : [this.data.product,[Validators.required]],
      quantity: [1,[Validators.required,Validators.min(1)]],
      unit: [null,[Validators.required]],
    });
    
  }

  onNoClick(){
    this.dialogRef.close();
  }
}
