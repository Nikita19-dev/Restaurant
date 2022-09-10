import { Component, Input, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-food-info',
  templateUrl: './food-info.component.html',
  styleUrls: ['./food-info.component.css']
})
export class FoodInfoComponent implements OnInit {
  @Input() selected_menu_items: any = []

  constructor(public dialogRef: MatDialogRef<FoodInfoComponent>) { }

  ngOnInit(): void {
  }

}
