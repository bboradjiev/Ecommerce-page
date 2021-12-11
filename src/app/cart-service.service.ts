import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartServiceService {
  
  orderedQtySource: Subject<number> = new Subject();

  get qtySource(): Subject<number> {
    return this.orderedQtySource;
  }
  set qtySource(src: Subject<number>) {
    this.orderedQtySource = src;
  }

  constructor() {}

  changeQty(num: any) {
    this.orderedQtySource.next(num);   
  }
}
