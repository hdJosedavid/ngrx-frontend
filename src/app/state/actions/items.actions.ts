import { ItemModel } from '@core/models/Item.interface';
import { createAction, props } from '@ngrx/store';

const ITEM_LIST_RETREVED_ITEMS = '[Item List] Retreview Item Success';
const ITEM_LIST_ADD = '[Item List] Add Items';
const ITEM_LIST_REMOVE = '[Item List] Remove Items';
const ITEM_LIST_CLEAN = '[Item List] Clean Items';
const ITEM_LIST_ADD_ITEMS = '[Item List] Add List Items';

export const addItem = createAction(
    ITEM_LIST_ADD,
    props<{ item: ItemModel }>()
)

export const retreviedItemList = createAction(
    ITEM_LIST_RETREVED_ITEMS,
    props<{ items: ItemModel[] }>()
)

export const removeItem = createAction(
    ITEM_LIST_REMOVE,
    props<{ id: number }>()
)