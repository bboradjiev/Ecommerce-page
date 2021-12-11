import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { CartServiceService } from 'src/app/cart-service.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
})
export class BodyComponent implements OnInit {
  numImg = 1;
  initialQty: number = 0;

  qtySrc!: Subject<number>;
  public qtyValue: number = 0;

  constructor(private cart: CartServiceService) {
    this.qtySrc = this.cart.qtySource;

    this.qtySrc.subscribe((value) => {
      this.qtyValue = value;
    });
  }
  ngOnInit(): void {}

  chosenImg(num: number) {
    this.numImg = num;
  }

  decreaseButton() {
    if (this.initialQty > 0) {
      this.initialQty--;
    }
  }
  increaseButton() {
    this.initialQty++;
  }

  cartQty() {
    this.cart.changeQty(this.initialQty);
  }

  emptyCartQty() {
    this.initialQty = 0;
    this.cart.changeQty(this.initialQty);
  }
}
