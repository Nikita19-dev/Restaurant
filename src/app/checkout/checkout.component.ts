import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private cartservice: CartService) {

  }

  ngOnInit(): void {
    console.log("cartservice ", this.cartservice.cartdata)
  }

}
