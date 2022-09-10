import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  checkoutdata: any;
  checkoutkeys: any;
  checkoutvalues: any;
  noOfItems: any;
  finalTotal: any;

  constructor(private cartservice: CartService) {

  }


  ngOnInit(): void {
    // once everything is loaded we will push data inside that
    console.log("cartservice ", this.cartservice.cartdata)
    this.checkoutdata = {}
    this.cartservice.cartdata.forEach((cart: any) => {
      this.checkoutdata[cart.id] = cart
    })
    console.log("checkoutdata ", this.checkoutdata)
    this.checkoutkeys = Object.keys(this.checkoutdata)
    this.noOfItems = this.checkoutkeys.length
    this.checkoutvalues = Object.values(this.checkoutdata)
    console.log("ckeckoutkeys and Checkoutvalue", this.checkoutkeys, this.checkoutvalues)
    this.calculateTotal()
  }
  addtoCart(item: any) {
    this.noOfItems = this.noOfItems + 1;
    console.log("printing id", item.id)
    if (this.checkoutdata) {

      if (this.checkoutdata[item.id]) {
        console.log("printing id in if condition ", item)
        this.checkoutdata[item.id].qty = this.checkoutdata[item.id].qty + 1


      }
      else {
        console.log("printing id in sec else condition ", item.id)
        this.checkoutdata[item.id] = { ...item, "qty": 1 }
        console.log("printing id in sec else condition ", this.checkoutdata[item.id])

      }

      this.checkoutkeys = Object.keys(this.checkoutdata)
      this.checkoutvalues = Object.values(this.checkoutdata)
    }
    else {
      //which ever first value it goes it stores as key then it go on adding value
      this.checkoutdata = {}
      console.log("printing id in else condition ", item.id)
      this.checkoutdata[item.id] = { ...item, "qty": 1 }
      this.checkoutkeys = Object.keys(this.checkoutdata)
      this.checkoutvalues = Object.values(this.checkoutdata)
    }
    this.calculateTotal()

    console.log(this.checkoutdata)
    // console.log("printing value checkoutdata", this.checkoutdata, this.checkoutdata[item.id].length)

  }


  removefromCart(items: any) {
    this.noOfItems = this.noOfItems - 1;
    if (this.checkoutdata[items.id].qty > 0) {
      this.checkoutdata[items.id].qty = this.checkoutdata[items.id].qty - 1

      if (this.checkoutdata[items.id].qty == 0) {
        delete this.checkoutdata[items.id]
      }
    }

    this.checkoutkeys = Object.keys(this.checkoutdata)
    this.checkoutvalues = Object.values(this.checkoutdata)

    this.calculateTotal()

  }
  calculateTotal() {
    let total = 0;
    this.checkoutvalues.forEach(
      (cart: any) => {
        total = total + cart.qty * cart.price;
      }

    )
    console.log("subtotal:", total)
    this.finalTotal = total
  }

}
