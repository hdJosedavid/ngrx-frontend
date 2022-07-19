
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/state/app.state';
import { selectItems } from 'src/app/state/selectors/items.selectors';

@Component({
  selector: 'app-ui-block-item',
  templateUrl: './ui-block-item.component.html',
  styleUrls: ['./ui-block-item.component.css']
})
export class UiBlockItemComponent implements OnInit {

  listData: any = []
  items$: Observable<any> = new Observable();

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.items$ = this.store.select(selectItems);
    console.log(this.items$)
  }


}
