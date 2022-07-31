import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { catchError, EMPTY, map } from 'rxjs';
import { FileUploadService } from 'src/app/products/services/file-upload.service';
import { ProductSelectors } from 'src/app/products/state/actions-types';
import { AppState } from 'src/app/reducers';
import { Product } from 'src/app/state/models/product.model';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent implements OnInit {

  labels$ = this._store.select(ProductSelectors.selectAllLabels);

  form : FormGroup;

  selectedFiles?: FileList;
  selectedFileNames: string[] = [];

  progressInfos: any[] = [];

  previews: string[] = [];

  constructor(
    public dialogRef: MatDialogRef<UpdateProductComponent>,
    private _formBuilder: FormBuilder,
    private _uploadService: FileUploadService,
    private _toastrService : ToastrService,
    private _store: Store<AppState>,
    @Inject(MAT_DIALOG_DATA) public product: Product
  ) { }


  ngOnInit(): void {
    this.form = this._formBuilder.group({
      name: [this.product.name,[Validators.required]],
      marque: [this.product.marque ? this.product.marque : null],
      picture : [this.product.picture ? this.product.picture : null],
      etiquette : [this.product.etiquette?.id,[Validators.required]],
      status: [this.product.status,[Validators.required]]
    });
  }

  selectFiles(event: any): void {
    this.progressInfos = [];
    this.selectedFileNames = [];
    this.selectedFiles = event.target.files;

    this.previews = [];
    if (this.selectedFiles && this.selectedFiles[0]) {
      const numberOfFiles = this.selectedFiles.length;
      for (let i = 0; i < numberOfFiles; i++) {
        const reader = new FileReader();

        reader.onload = (e: any) => {
          this.previews.push(e.target.result);
        };

        reader.readAsDataURL(this.selectedFiles[i]);

        this.selectedFileNames.push(this.selectedFiles[i].name);
      }
    }
  }

  upload(idx: number, file: File): void {
    event.preventDefault();
    this.progressInfos[idx] = { value: 0, fileName: file.name };

    if (file) {
      this._uploadService.upload(this.form.value.name ? this.form.value.name :  'produit',file).pipe(
        map(event => {
          if (event.type === HttpEventType.UploadProgress) {
            this.progressInfos[idx].value = Math.round(
              (100 * event.loaded) / event.total
            );
          } else if (event instanceof HttpResponse) {
            this.form.patchValue({picture: event.body.data.id});
            this._toastrService.success('Image enregistrée.', 'Success');
          }
        }),
        catchError((error) => {
          this.progressInfos[idx].value = 0;
          this._toastrService.error(`Impossible d\'envoyer le fichier. ${error}`, 'Erreur');
          return EMPTY;
        })
      ).subscribe();
    }
  }

  uploadFiles(): void {
    if (this.selectedFiles) {
      for (let i = 0; i < this.selectedFiles.length; i++) {
        this.upload(i, this.selectedFiles[i]);
      }
    }
  }

  onNoClick() : void {
    this.dialogRef.close()
  }

  onOkClick() : void {
    this.dialogRef.close({...this.form.value , id: this.product.id});
  }

}
