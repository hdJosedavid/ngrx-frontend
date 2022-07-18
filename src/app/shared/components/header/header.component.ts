import { Component, OnInit } from '@angular/core';
import { ItemModel } from '@core/models/Item.interface';
import { Store } from '@ngrx/store';
import { addItem } from 'src/app/state/actions/items.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void { }

  addItem(): void {
    const dataItem: ItemModel = {
      name: 'Juanito',
      price: 13,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/77.svg`
    }

    this.store.dispatch(addItem({item: dataItem}));
  }

}
