import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomMaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { GraphQLModule } from '../graphql.module';
import { SecurityInterceptor } from './interceptors/SecurityInterceptor';
import { AddInCartModalComponent } from './components/add-in-cart-modal/add-in-cart-modal.component';


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
  declarations: [
    AddInCartModalComponent
  ],
  imports: [
    ...modules
  ],
  providers: [...services],
  exports: [...modules ]
})
export class SharedModule { }