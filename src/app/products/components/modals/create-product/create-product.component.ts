import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { catchError, EMPTY, map } from 'rxjs';
import { FileUploadService } from 'src/app/products/services/file-upload.service';
import { ProductSelectors } from 'src/app/products/state/actions-types';
import { AppState } from 'src/app/state/app.state';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss'],

})
export class CreateProductComponent implements OnInit {

  labels$ = this._store.select(ProductSelectors.selectAllLabels);

  form : FormGroup;

  selectedFiles?: FileList;
  selectedFileNames: string[] = [];

  progressInfos: any[] = [];
  requiredTypeFiles : string[] = ['image/png', 'image/jpeg', 'image/jpg'];
  previews: string[] = [];

  constructor(
    public dialogRef: MatDialogRef<CreateProductComponent>,
    private _formBuilder: FormBuilder,
    private _store: Store<AppState>,
    private _uploadService: FileUploadService,
    private _toastrService : ToastrService
  ) { }

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      name: [null,[Validators.required]],
      marque: [null],
      picture : [null],
      etiquette : [null,[Validators.required]],
      status: [null,[Validators.required]]
    });
  }

  onNoClick() : void {
    this.dialogRef.close()
  }
}
