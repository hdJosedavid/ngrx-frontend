import { ItemModel } from '@core/models/Item.interface';
import { createFeatureSelector, createSelector } from '@ngrx/store'; //TODO <----


export const selectItems = createFeatureSelector<ItemModel[]>('items');

// export const selectListItems = createSelector(
//   selectItems,
//   (state: ItemModel) => state.items
// );

// export const selectLoading = createSelector(
//     selectItemsFeature,
//     (state: ItemsState) => state.loading //TODO: HIJO
// );