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

  addtoCart(id: any) {

    console.log("printing id", id)
    if (this.tempcart) {

      if (this.tempcart[id]) {
        console.log("printing id in if condition ", id)
        this.tempcart[id] = this.tempcart[id] + 1

      }
      else {
        console.log("printing id in sec else condition ", id)
        this.tempcart[id] = 1
        console.log("printing id in sec else condition ", this.tempcart[id])

      }
      this.emptycart = false
      this.cartkeys = Object.keys(this.tempcart)
    }
    else {
      //which ever first value it goes it stores as key then it go on adding value
      this.tempcart = {}
      console.log("printing id in else condition ", id)
      this.tempcart[id] = 1
      this.cartkeys = Object.keys(this.tempcart)
    }


    console.log("printing value tempcart", this.tempcart, this.tempcart[id].length)
  }
  removefromCart(id: any) {
    if (this.tempcart[id] > 0) {
      this.tempcart[id] = this.tempcart[id] - 1
    }
    if (this.tempcart[id] == 0) {
      this.emptycart = true
    }



  }





  menu_items = [
    {
      name: "Spanish Egg sandwich",
      price: 50,
      img_url: "assets/food1.jpg"


      // /category :veg or nonveg
      // subcategory:starter, maincourse, deserts, soup
      //recommonded:true
      //rating:mockdata---2,3,4

    },
    {
      name: "Spanish Egg sandwich",
      price: 50,
      img_url: "assets/food1.jpg"

    },
    {
      name: "Spanish Egg sandwich",
      price: 50,
      img_url: "assets/food1.jpg"

    },
    {
      name: "Spanish Egg sandwich",
      price: 50,
      img_url: "assets/food1.jpg"

    },
    {
      name: "Spanish Egg sandwich",
      price: 50,
      img_url: "assets/food1.jpg"

    },
    {
      name: "Spanish Egg sandwich",
      price: 50,
      img_url: "assets/food1.jpg"

    },
    {
      name: "Spanish Egg sandwich",
      price: 50,
      img_url: "assets/food1.jpg"

    },
    {
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

