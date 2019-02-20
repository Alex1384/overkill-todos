import { List } from './../shared/models/list.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  public itemContent = "";
  constructor() { }

  ngOnInit() {
  }

  addItem(list: List) {
    if (this.itemContent) {
      list.items.push({
        content: this.itemContent
      });
    }
    this.itemContent= "";
  }
}
