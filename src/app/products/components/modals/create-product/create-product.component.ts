import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { catchError, EMPTY, map, Observable, of } from 'rxjs';
import { FileUploadService } from 'src/app/products/services/file-upload.service';
import { Store } from '@ngrx/store';
import { selectLabels } from 'src/app/state/labels/labels.selectors';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {

  labels$ = this._store.select(selectLabels);

  form : FormGroup;

  selectedFiles?: FileList;
  selectedFileNames: string[] = [];

  progressInfos: any[] = [];

  previews: string[] = [];

  constructor(
    public dialogRef: MatDialogRef<CreateProductComponent>,
    private _formBuilder: FormBuilder,
    private _store : Store,
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
}
