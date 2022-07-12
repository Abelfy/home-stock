import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockListComponent } from './components/stock-list/stock-list.component';
import { StockRoutingModule } from './stock-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    StockListComponent
  ],
  imports: [
    CommonModule,
    StockRoutingModule,
    SharedModule
  ]
})
export class StockModule { }
