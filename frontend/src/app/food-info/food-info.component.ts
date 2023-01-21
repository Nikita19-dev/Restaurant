import { JsonpInterceptor } from '@angular/common/http';
import { jsDocComment } from '@angular/compiler';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CartService } from '../cart.service';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-food-info',
  templateUrl: './food-info.component.html',
  styleUrls: ['./food-info.component.css']
})
export class FoodInfoComponent implements OnInit {
  @Input() selected_menu_items: any = []
  foodkeys: any;
  foodoveralldata: any;
  foodcart: any;   //it has cart keys 
  noOfItems: any;
  foodvalues: any
  finalTotal: any;
  foodcartarray: any;
  tempcartv: any

  constructor(public dialogRef: MatDialogRef<FoodInfoComponent>, private foodinfodata: FoodService, @Inject(MAT_DIALOG_DATA) public data: any) {
    dialogRef.backdropClick().subscribe(() => {
      // Close the dialog
      dialogRef.close(JSON.stringify({ ...this.data, star: 5 }));
    })
  }
  foodinfo: any = []



  ngOnInit(): void {
    console.log("data from component ", this.data)
    this.foodinfo = this.foodinfodata.fooddata
    // this.foodcartarray[this.foodinfo.id] = { ...this.foodinfo, qty: 0 }
    this.foodoveralldata = this.foodinfodata.overalldata
    this.foodcart = this.foodinfodata.foodcart
    this.foodvalues = this.foodinfodata.foodcartvalues

    console.log("foodoveralldata ", this.foodoveralldata)
    console.log("foodinfodata", this.foodinfo)
    console.log("foodcart", this.foodcart)
  }
  addtoCart() {
    this.data.qty = this.data.qty + 1

  }
  removefromCart() {
    this.data.qty = this.data.qty - 1

  }
}
