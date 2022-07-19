import { ItemModel } from '@core/models/Item.interface';
import { createAction, props } from '@ngrx/store';

export const addItem = createAction(
    '[Item List] Add Items',
    props<{ item: ItemModel }>()
)

export const retreviedItemList = createAction(
    '[Item List/API] Retreview Item Success',
    props<{ items: ItemModel[] }>()
)