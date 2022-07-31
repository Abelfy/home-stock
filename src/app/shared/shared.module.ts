import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomMaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SecurityInterceptor } from './interceptors/SecurityInterceptor';
import { AddInCartModalComponent } from '../products/components/modals/add-in-cart-modal/add-in-cart-modal.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';

const components = [
  AddInCartModalComponent,
  FileUploadComponent
]

const modules = [
  CommonModule,
  CustomMaterialModule,
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule
]

const services = [
  { provide: HTTP_INTERCEPTORS, useClass: SecurityInterceptor, multi: true }
]
@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    ...modules
  ],
  providers: [...services],
  exports: [...modules,...components ]
})
export class SharedModule { }
