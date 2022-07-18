import { ItemModel } from "@core/models/Item.interface";
import { ActionReducerMap } from "@ngrx/store";
import { itemsReducer } from "./reducers/items.reducers";

export interface AppState {
    items: ItemModel [];
}

// user: ItemsState;
// favorite: ItemsState;

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
    items: itemsReducer
}

// user: itemsReducer,
// favorite: itemsReducer