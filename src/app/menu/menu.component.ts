import { SelectorMatcher } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  checked_V = false;
  checked_N = false;
  tempcart: any
  addtocartvisible = false
  cartkeys: string[] = []
  emptycart = false
  noOfItems = 0
  cartArray: any = []
  finalTotal: number = 0;

  calculateTotal() {
    let total = 0;
    this.cartArray.forEach(
      (cart: any) => {
        total = total + cart.qty * cart.price;
      }

    )
    console.log("subtotal:", total)
    this.finalTotal = total
  }

  addtoCart(item: any) {
    this.noOfItems = this.noOfItems + 1;
    console.log("printing id", item.id)
    if (this.tempcart) {

      if (this.tempcart[item.id]) {
        console.log("printing id in if condition ", item)
        this.tempcart[item.id].qty = this.tempcart[item.id].qty + 1


      }
      else {
        console.log("printing id in sec else condition ", item.id)
        this.tempcart[item.id] = { ...item, "qty": 1 }
        console.log("printing id in sec else condition ", this.tempcart[item.id])

      }
      this.emptycart = false
      this.cartkeys = Object.keys(this.tempcart)
      this.cartArray = Object.values(this.tempcart)
    }
    else {
      //which ever first value it goes it stores as key then it go on adding value
      this.tempcart = {}
      console.log("printing id in else condition ", item.id)
      this.tempcart[item.id] = { ...item, "qty": 1 }
      this.cartkeys = Object.keys(this.tempcart)
      this.cartArray = Object.values(this.tempcart)
    }
    this.calculateTotal()

    console.log(this.tempcart)
    // console.log("printing value tempcart", this.tempcart, this.tempcart[item.id].length)

  }
  removefromCart(items: any) {
    this.noOfItems = this.noOfItems - 1;
    if (this.tempcart[items.id].qty > 0) {
      this.tempcart[items.id].qty = this.tempcart[items.id].qty - 1

      if (this.tempcart[items.id].qty == 0) {
        delete this.tempcart[items.id]
      }
    }

    this.cartkeys = Object.keys(this.tempcart)
    this.cartArray = Object.values(this.tempcart)

    this.calculateTotal()

  }





  menu_items = [
    {
      id: 0,
      name: "Spanish Egg sandwich",
      price: 50,
      img_url: "assets/food1.jpg"


      // /category :veg or nonveg
      // subcategory:starter, maincourse, deserts, soup
      //recommonded:true
      //rating:mockdata---2,3,4

    },
    {
      id: 1,
      name: "Spanish Egg sandwich",
      price: 50,
      img_url: "assets/food1.jpg"

    },
    {
      id: 2,
      name: "Spanish Egg sandwich",
      price: 50,
      img_url: "assets/food1.jpg"

    },
    {
      id: 3,
      name: "Spanish Egg sandwich",
      price: 50,
      img_url: "assets/food1.jpg"

    },
    {
      id: 4,
      name: "Spanish Egg sandwich",
      price: 50,
      img_url: "assets/food1.jpg"

    },
    {
      id: 5,
      name: "Spanish Egg sandwich",
      price: 50,
      img_url: "assets/food1.jpg"

    },
    {
      id: 6,
      name: "Spanish Egg sandwich",
      price: 50,
      img_url: "assets/food1.jpg"

    },
    {
      id: 7,
      name: "Spanish Egg sandwich",
      price: 50,
      img_url: "assets/food1.jpg"

    }
  ]





  constructor() { }

  ngOnInit(): void {

  }

}
function n(n: any) {
  throw new Error('Function not implemented.');
}

