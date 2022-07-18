import { ItemModel } from '@core/models/Item.interface';
// import { ItemsState } from '@core/models/Item.state';
import { createFeatureSelector, createSelector } from '@ngrx/store'; //TODO <----
import { AppState } from '../app.state';

//TODO: Es el selector que tiene relacion con la propiedad "items"

export const selectItems = createFeatureSelector<ItemModel[]>('items');

// export const selectListItems = createSelector(
//     selectItemsFeature,
//     (state: ItemsState) => state.items //TODO: HIJO
// );

// export const selectLoading = createSelector(
//     selectItemsFeature,
//     (state: ItemsState) => state.loading //TODO: HIJO
// );