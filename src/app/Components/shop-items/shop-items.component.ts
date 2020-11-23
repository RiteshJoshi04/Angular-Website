import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/Models/itemList';

@Component({
  selector: 'app-shop-items',
  templateUrl: './shop-items.component.html',
  styleUrls: ['./shop-items.component.css']
})
export class ShopItemsComponent implements OnInit {
  items: Item[] = [];
  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        title: 'Shoes',
        price: 20,
        description: 'xyz',
        isDiscount: false,
        discount: 0
      },
      {
        title: 'Shirt',
        price: 15,
        description: 'abc',
        isDiscount: true,
        discount: 2
      },
      {
        title: 'Shorts',
        price: 10,
        description: 'pqr',
        isDiscount: true,
        discount: 2
      }
    ]
  }
}
