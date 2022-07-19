import { Component, OnInit } from '@angular/core';
import { ItemModel } from '@core/models/Item.interface';
import { ShowCaseService } from '@modules/show-case/services/show-case.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { retreviedItemList } from "@state/actions/items.actions";

@Component({
  selector: 'app-show-case-page',
  templateUrl: './show-case-page.component.html',
  styleUrls: ['./show-case-page.component.css'],
})
export class ShowCasePageComponent implements OnInit {

  listItems: ItemModel[] = [];
  listItems$: Observable<any> = new Observable();

  constructor(
    private store: Store<any>,
    private showCaseService: ShowCaseService
  ) {
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.showCaseService.getDataApi()
      .subscribe((response: ItemModel[]) => {
        console.log('___', response);
        this.store.dispatch(retreviedItemList( // component send to action
          { items: response }
        ))
      });
  }
}
