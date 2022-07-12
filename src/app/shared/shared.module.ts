import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomMaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { GraphQLModule } from '../graphql.module';
import { ToastrModule } from 'ngx-toastr';
import { SecurityInterceptor } from './interceptors/SecurityInterceptor';


const modules = [
  CommonModule,
  CustomMaterialModule,
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule,
  GraphQLModule,
]

const services = [
  { provide: HTTP_INTERCEPTORS, useClass: SecurityInterceptor, multi: true }
]
@NgModule({
  declarations: [],
  imports: [
    ...modules
  ],
  providers: [...services],
  exports: [...modules ]
})
export class SharedModule { }
