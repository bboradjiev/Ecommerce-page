import { Component,  OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { CartServiceService } from 'src/app/cart-service.service';
 
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  qtySrc!: Subject<number>;
  public qtyValue: number = 0;

  toggleCart = false;
  toggleNav = false;

  constructor(private cart: CartServiceService) {
    this.qtySrc = this.cart.qtySource;

    this.qtySrc.subscribe((value) => {
      this.qtyValue = value;
      
    });
  }

  toggleCartFunc() {
    this.toggleCart = !this.toggleCart;
  }
  toggleNavFunc() {  
    this.toggleNav = !this.toggleNav;
  }

  ngOnInit(): void {}

  emptyCartQty() {
    this.cart.changeQty(0);
  }
}
