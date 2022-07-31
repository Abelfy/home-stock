import { HttpEventType } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';
import { catchError, finalize, of } from 'rxjs';
import { FileUploadService } from 'src/app/products/services/file-upload.service';
import { AppFile } from 'src/app/state/models/file.model';


@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: FileUploadComponent,
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: FileUploadComponent,
      multi: true,
    }
  ],
})
export class FileUploadComponent implements ControlValueAccessor, Validator {
  @Input()
  requiredTypeFiles: string;
  fileName: string = '';
  file : AppFile;
  fileUploadError: boolean;
  uploadProgress: number;
  onChange: Function = (file: AppFile) => {};
  onTouched: Function = () => {};
  onValidatorChange: Function = () => {};
  disabled: boolean = false;
  fileUploadSuccess : boolean = false;

  constructor(private fileUploadSrv: FileUploadService) {}
 

  writeValue(value: AppFile): void {
    console.log('writeValue', value);
    if(value){
      this.fileName = value.filename_disk;
    }    
    this.file = value;
  }
  registerOnChange(onChange: Function): void {
    this.onChange = onChange;
  }
  registerOnTouched(onTouched: Function): void {
    this.onTouched = onTouched;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onClick(fileUpload: HTMLInputElement) {
    this.onTouched();
    fileUpload.click();
  }

  validate(control: AbstractControl<any, any>): ValidationErrors {
    if(this.fileUploadSuccess){
      return null;
    }
    let errors : any = {
      requiredTypeFiles : this.requiredTypeFiles
    };
    console.log(control.getRawValue())

    if(this.fileUploadError){
      errors.uploadFailed = true;
    }
    return errors
  }

  registerOnValidatorChange?(onValidatorChange: () => void): void {
    this.onValidatorChange = onValidatorChange;
  }

  onFileChange(event) {
    const file: File = event.target.files[0];
    if (file) {
      this.fileName = file.name;
      this.fileUploadSrv
        .upload(this.fileName, file)
        .pipe(
          catchError((error) => {
            this.fileUploadError = true;
            return of(error);
          }),
          finalize(() => {
            this.uploadProgress = null;
          })
        )
        .subscribe((event) => {
          if (event.type == HttpEventType.UploadProgress) {
            this.uploadProgress = Math.round(
              (event.loaded / event.total) * 100
            );
          }
          if (event.type == HttpEventType.Response) {
            this.fileUploadSuccess = true;
            this.onChange((event.body.data as AppFile));
            this.onValidatorChange();
          }
        });
    }
  }
}
