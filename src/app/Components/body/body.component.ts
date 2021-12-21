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
  numImgModal = 1;
  initialQty: number = 0;
  showModal = false;
  showCart = false

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

  chosenImgModal(num: number) {
    this.numImgModal = num;
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

  toggleModal() {
    this.showModal = !this.showModal;
  }

  nextImg() {
    if (this.numImgModal < 4) {
      this.numImgModal++;
    } else this.numImgModal = 1;
  }
  prevImg() {
    if (this.numImgModal > 1) {
      this.numImgModal--;
    } else {
      this.numImgModal = 4;
    }
  }

  nextImgMobile() {
    if (this.numImg < 4) {
      this.numImg++;
    } else this.numImg = 1;
  }

  prevImgMobile() {
    if (this.numImg > 1) {
      this.numImg--;
    } else {
      this.numImg = 4;
    }
  }
}
