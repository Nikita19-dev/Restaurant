import { SelectorMatcher } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { CartService } from '../cart.service';
import { FoodInfoComponent } from '../food-info/food-info.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  checked_V = false
  checked_N = false
  tempcart: any
  addtocartvisible = false
  cartkeys: string[] = []
  emptycart = false
  noOfItems = 0
  cartArray: any = []
  finalTotal: number = 0;
  selectedMenuItems: any = []
  selectedMenuItem_veg: any = []
  recommended_items: any = []
  filterByCatergory: any = ""
  check: any = "";
  globalType: string = ""
  searchdish: any
  searchError: string = "";


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
  filter(type: any) {

    if ((type === "recommended")) {
      this.globalType = type;
      this.selectedMenuItems = this.menu_items.filter(item => item.recommended === true);
    }
    else if (type === "veg") {
      console.log("selected_menuItems ", this.selectedMenuItems)
      this.checked_V = !this.checked_V
      this.checked_N = this.checked_N ? false : this.checked_N
      this.checkV()
      // this.selectedMenuItems = this.selectedMenuItems.filter((item: { category: string; }) => item.category === "veg")
      console.log("selected_menuItems ", this.selectedMenuItems)
    }
    else if (type === "non-veg") {
      console.log("selected_menuItems ", this.selectedMenuItems)
      this.checked_N = !this.checked_N
      this.checked_V = this.checked_V ? false : this.checked_V
      this.checkN()
      // this.selectedMenuItems = this.selectedMenuItems.filter((item: { category: string; }) => item.category === "non-veg")
    }
    else {
      this.globalType = type;
      this.selectedMenuItems = this.menu_items.filter(item => item.subcategory === type);

    }

  }

















  // filter(type: any) {
  //   console.log("Selecteditem" + this.selectedMenuItems);
  //   console.log("type" + type);

  //   if ((type === "recommended")) {
  //     this.selectedMenuItems = this.menu_items.filter(item => item.recommended === true);
  //     if(this.filterByCatergory == type){
  //       this.filterByCatergory = ""
  //       this.selectedMenuItems = this.menu_items.filter(item => item.recommended === true)
  //     }
  //     else{
  //       this.filterByCatergory = type;
  //       this.selectedMenuItems = this.selectedMenuItems.filter((item: { category: string; }) => item.category === "veg")

  //     }
  //   }
  //   else {
  //     if (this.filterByCatergory == type) {
  //       this.filterByCatergory = ""
  //       this.selectedMenuItems = this.menu_items.filter(item => item.recommended === true)
  //     }
  //     else {
  //       this.filterByCatergory = type;
  //       this.selectedMenuItems = this.selectedMenuItems.filter((item: { category: string; }) => item.category === "veg")

  //     }
  //     // if (type === "veg") {
  //     //   this.selectedMenuItems = this.menu_items.filter(item => item.recommended === true)
  //     //   this.selectedMenuItems = this.selectedMenuItems.filter((item: { category: string; }) => item.category === "veg")
  //     // }
  //   }

  //   // else if (type === "non-veg") {
  //   //   this.selectedMenuItems = this.menu_items.filter(item => item.recommended === true)
  //   //   this.selectedMenuItems = this.selectedMenuItems.filter((item: { category: string; }) => item.category === "non-veg")
  //   // }
  //   // else if (type === "starter") {
  //   //   this.selectedMenuItems = this.menu_items.filter(item => item.subcategory === "starter")
  //   // }
  //   // else if (type === "veg") {
  //   //   this.selectedMenuItems = this.menu_items.filter(item => item.subcategory === "starter")
  //   //   this.selectedMenuItems = this.selectedMenuItems.filter((item: { category: string; }) => item.category === "veg")
  //   // }

  //   // else if (type === "non-veg") {
  //   //   this.selectedMenuItems = this.menu_items.filter(item => item.subcategory === "starter")
  //   //   this.selectedMenuItems = this.selectedMenuItems.filter((item: { category: string; }) => item.category === "non-veg")
  //   // }


  //   // else {
  //   //   this.selectedMenuItems = this.menu_items.filter(item => item.subcategory === type)
  //   // }
  //   // console.log("hello" + this.selectedMenuItems);



  // }



  // filter function here
  filterRecom(type: any) {
    console.log("Selected_menuitems" + this.selectedMenuItems)
    console.log("type" + type)
    console.log("filetercategory " + this.filterByCatergory)
    this.globalType = "recommended"
    if (type === "recommended") {
      this.checked_V = false;
      this.selectedMenuItems = this.menu_items.filter(item => item.recommended === true)

    }
  }
  filterStarter(type: any) {
    this.checked_V = false
    this.globalType = "starter"
    if (type === "starter") {

      this.selectedMenuItems = this.menu_items.filter(item => item.subcategory === "starter")

    }
  }
  filterMain(type: any) {
    this.globalType = "Main"
    if (type === "Main") {

      this.selectedMenuItems = this.menu_items.filter(item => item.subcategory === " Main")

    }
  }
  filterSoup(type: any) {
    this.globalType = "soups"
    if (type === "soups") {

      this.selectedMenuItems = this.menu_items.filter(item => item.subcategory === "soups")

    }

  }
  filterDessert(type: any) {
    this.selectedMenuItems = this.menu_items.filter(item => item.subcategory === "dessert")
  }


























  // if (type === "recommended" && this.filterByCatergory !== "veg" || type === "veg") {
  //   // this.selectedMenuItems = this.menu_items.filter(item => item.recommended === true);
  //   if (this.filterByCatergory === "veg") {
  //     this.filterByCatergory = ""
  //     this.selectedMenuItems = this.menu_items.filter(item => item.recommended === true)
  //   }
  //   else if (type !== "recommended" && this.filterByCatergory !== "veg") {
  //     this.filterByCatergory = "veg";
  //     this.selectedMenuItems = this.selectedMenuItems.filter((item: { category: string; }) => item.category === "veg")
  //   }
  // }
  // else if (type === "starter" && this.filterByCatergory !== "veg" || type === "veg") {
  //   this.selectedMenuItems = this.menu_items.filter(item => item.subcategory === "starter");
  //   if (this.filterByCatergory === "veg") {
  //     this.filterByCatergory = ""
  //     this.selectedMenuItems = this.menu_items.filter(item => item.subcategory === "starter");
  //   }
  //   else if (type !== "starter" && this.filterByCatergory !== "veg") {
  //     this.filterByCatergory = "veg";
  //     this.selectedMenuItems = this.menu_items.filter(item => item.subcategory === "starter");
  //   }
  // }
  // else {
  //   this.selectedMenuItems = this.menu_items.filter(item => item.subcategory === type)
  // }



  checkveg(type: any) {
    if (this.filterByCatergory === type && this.globalType === "recommended") {
      this.filterByCatergory = '';
      this.filterRecom('recommended')
    }
    else if (this.filterByCatergory === type && this.globalType === "starter") {
      this.filterByCatergory = '';
      this.filterStarter('starter')
    }
    else if (this.filterByCatergory === type && this.globalType === "soups") {
      this.filterByCatergory = '';
      this.filterSoup('soups')
    }
    else {
      this.filterByCatergory = type
      this.selectedMenuItems = this.selectedMenuItems.filter((item: { category: string; }) => item.category === "veg")
    }


  }


  checkV() {
    console.log("Inside_checkv", this.selectedMenuItems, this.checked_V, this.globalType)
    if (this.checked_V) {
      if (this.globalType === "recommended") {
        this.selectedMenuItems = this.menu_items.filter((item) => item.category === "veg" && item.recommended === true)

      }
      else {
        this.selectedMenuItems = this.menu_items.filter((item) => item.category === "veg" && item.subcategory === this.globalType)
      }
    }
    else {
      if (this.globalType === "recommended") {
        this.selectedMenuItems = this.menu_items.filter((item) => item.recommended === true)

      }
      else {
        this.selectedMenuItems = this.menu_items.filter((item) => item.subcategory === this.globalType)
      }
    }
    console.log("checked_v_to", this.selectedMenuItems, this.checked_V)
  }

  checkN() {

    if (this.checked_N) {
      if (this.globalType === "recommended") {
        this.selectedMenuItems = this.menu_items.filter((item) => item.category === "non-veg" && item.recommended === true)

      }
      else {
        this.selectedMenuItems = this.menu_items.filter((item) => item.category === "non-veg" && item.subcategory === this.globalType)
      }
    }
    else {
      if (this.globalType === "recommended") {
        this.selectedMenuItems = this.menu_items.filter((item) => item.recommended === true)

      }
      else {
        this.selectedMenuItems = this.menu_items.filter((item) => item.subcategory === this.globalType)
      }
    }
  }
  resetCheck() {
    this.checked_N = false
    this.checked_V = false
  }
  search() {
    this.selectedMenuItems = this.menu_items.filter(item => item.name.toLowerCase().includes(this.searchdish.toLowerCase()));
    if (this.selectedMenuItems.length == 0) {
      this.searchError = "We couldn’t find any items matching your search. Please try a new keyword."
    }
    else {
      this.searchError = ""
    }
  }


  checkout() {
    this.cartservice.cartdata = this.cartArray
    console.log("cart array data", this.cartArray)
    this.router.navigate(['/checkout'])
  }












  menu_items = [
    {
      id: 0,
      name: "Paneer Chilli",
      price: 125,
      img_url: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/d8xn2mzqxf8pzudfilmd",
      category: "veg",
      subcategory: "starter",
      recommended: false,
      rating: 3.5

    },
    {
      id: 1,
      name: "Gobi Chilli",
      price: 140,
      img_url: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/yberwdme5rjehmvwldha",
      category: "veg",
      subcategory: "starter",
      recommended: true,
      rating: 3.5

    },
    {
      id: 2,
      name: "Mushroom Manchurian",
      price: 170,
      img_url: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/gyex8z1py7wqb3pnzk3z",
      category: "veg",
      subcategory: "starter",
      recommended: true,
      rating: 4.5

    },
    {
      id: 3,
      name: "Tandoori Murgh Tikka ",
      price: 300,
      img_url: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/fd1jk23t6tewsguwbugj",
      category: "non-veg",
      subcategory: "starter",
      recommended: true,
      rating: 4.0

    },
    {
      id: 4,
      name: "Tandoori Kebab Platter ",
      price: 309,
      img_url: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/isan81kabs24tlhf4hxk",
      category: "non-veg",
      subcategory: "starter",
      recommended: true,
      rating: 3.5

    },
    {
      id: 5,
      name: "Tandoori Chicken",
      price: 400,
      img_url: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/tgyirycaqfuplehcgg4y",
      category: "non-veg",
      subcategory: "starter",
      recommended: false,
      rating: 3.5

    },
    {
      id: 6,
      name: "Hot Chocolate Fudge",
      price: 135,
      img_url: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/x4qmxkutjdoi7vxh1ynd",
      // category: "veg",
      subcategory: "dessert",
      recommended: true,
      rating: 3.5


    },
    {
      id: 7,
      name: "Brownie Fudge",
      price: 175,
      img_url: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/uzdysmskagcdcd5qsteb",
      // category: "non-veg",
      subcategory: "dessert",
      recommended: false,
      rating: 3.5

    },
    {
      id: 8,
      name: "Mango Berry",
      price: 155,
      img_url: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/rgkpsgqm2s7rckduxlej",
      // category: "non-veg",
      subcategory: "dessert",
      recommended: false,
      rating: 3.5

    },
    {
      id: 9,
      name: "Gudbad",
      price: 210,
      img_url: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/sx2viocllb0zltddu9cm",
      // category: "non-veg",
      subcategory: "dessert",
      recommended: false,
      rating: 3.5

    },
    {
      id: 10,
      name: "Fruit Zest",
      price: 175,
      img_url: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/mrzejisbmmljelywjiyp",
      // category: "non-veg",
      subcategory: "dessert",
      recommended: false,
      rating: 3.5
    },
    {
      id: 11,
      name: "Lychee Sundae",
      price: 185,
      img_url: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/trpdlqilxfhb6rln7p8d",
      //  category: "non-veg",
      subcategory: "dessert",
      recommended: false,
      rating: 5.0
    },
    {
      id: 12,
      name: "Veg Manchow Soup",
      price: 139,
      img_url: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/kwi6nvngkj1smlxupub2",
      category: "veg",
      subcategory: "soups",
      recommended: false,
      rating: 5.0
    },
    {
      id: 13,
      name: "Cream of Tomato Soup",
      price: 107,
      img_url: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/mkj4blkzusa3ztlfavli",
      category: "veg",
      subcategory: "soups",
      recommended: false,
      rating: 4.5
    },
    {
      id: 14,
      name: "Veg Hot & Sour Soup",
      price: 179,
      img_url: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/yaf4cvx1bgprjl2iv0ch",
      category: "veg",
      subcategory: "soups",
      recommended: false,
      rating: 5.0
    },
    {
      id: 15,
      name: "Chicken Wonton Soup",
      price: 185,
      img_url: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/nxlmxrbnajbotqvn1kks",
      category: "non-veg",
      subcategory: "soups",
      recommended: false,
      rating: 3.5
    },
    {
      id: 16,
      name: "Chicken Hot & Sour Soup",
      price: 185,
      img_url: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/uoqfnxxrlkkjrqjd9tmj",
      category: "non-veg",
      subcategory: "soups",
      recommended: false,
      rating: 5.0
    },
    {
      id: 17,
      name: "Mutton legpieces soup",
      price: 179,
      img_url: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/dbeottxx4oumwk7ouwpi",
      category: "non-veg",
      subcategory: "soups",
      recommended: false,
      rating: 5.0
    },

  ]

  navigate() {
    this.router.navigate(['foodinfo'])
  }
  image() {

  }


  constructor(private cartservice: CartService, private router: Router, public dialog: MatDialog) { }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(FoodInfoComponent, {
      panelClass: 'custom-dialog-container',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }



  ngOnInit(): void {
    this.selectedMenuItems = this.menu_items.filter(item => item.recommended === true);
    // this.filterRecom("recommended");
    this.globalType = "recommended"
  }

}


