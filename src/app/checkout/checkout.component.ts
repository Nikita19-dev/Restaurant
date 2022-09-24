import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
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
  contactform: any;

  constructor(private router: Router, private cartservice: CartService, private _snackBar: MatSnackBar, private formBuilder: FormBuilder) {

  }


  ngOnInit(): void {

    this.contactform = this.formBuilder.group({
      username: ['', [Validators.required]],
      phoneno: ['', Validators.required],
      emailid: ['', Validators.email],
      address: ['', Validators.required]


    })
    // once everything is loaded we will push data inside that
    console.log("cartservice ", this.cartservice.cartdata)

    this.checkoutdata = {}
    if (this.cartservice.cartdata) {
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
    else {
      this.router.navigate(['/menu'])
    }
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
    if (this.checkoutkeys.length == 0) {
      this.router.navigate(['/menu'])
    }

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
  openSnackBar() {
    this._snackBar.open("Hurrey!🙂. Your order is placed successfully", '', { duration: 2000 });
  }

}
