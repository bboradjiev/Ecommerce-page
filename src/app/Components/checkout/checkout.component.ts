import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

import { CartServiceService } from 'src/app/cart-service.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  qtySrc!: Subject<number>;
  qtyValue = 0;

  constructor(private cart: CartServiceService) {
    // this.qtySrc = this.cart.qtySource;
    // this.qtySrc.subscribe((value) => {
    //   this.qtyValue = value;
    //   console.log(this.qtyValue);

    // });
    this.cart.qtySource.subscribe((variable) => {
      return (this.qtyValue = variable);
    });
  }

  check() {
    console.log(this.qtyValue);
  }

  ngOnInit(): void {}
}
