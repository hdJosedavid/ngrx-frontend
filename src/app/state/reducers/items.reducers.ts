import { ItemModel } from '@core/models/Item.interface';
import { createReducer, on } from '@ngrx/store';
import { addItem, retreviedItemList } from '../actions/items.actions';

export const initialState: ItemModel[] = [];

export const itemsReducer = createReducer(
  initialState,
  on(addItem, (oldState, { item }) => {
    return [...[item], ...oldState]
  }),
  on(retreviedItemList, (oldState, { items }) => {
    return [...oldState, ...items]
  })
);
