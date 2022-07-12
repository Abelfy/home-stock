import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StockService } from '../../services/stock.service';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.scss']
})
export class StockListComponent implements OnInit {

  stock$ : Observable<any> = this.stockSrv.getStocks();

  constructor(private stockSrv : StockService) { }

  ngOnInit(): void {
  }

}
