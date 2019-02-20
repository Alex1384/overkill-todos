import { ItemComponent } from './item/item.component';
import { List } from './shared/models/list.model';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  @ViewChild(ItemComponent)
  private itemList: ItemComponent;
  
  
  public listLabel = "";
  public lists: List[] = [
    {
      label: 'To do',
      items: [
        {content: 'Create list'},
        {content: ' List'},
        {content: 'List item'},
      ]
    }
  ];

  

  createList() {
    if(this.listLabel) {
      this.lists.push({
        label: this.listLabel,
        items: []
      })
      this.listLabel= "";
    }
  }

  



}
