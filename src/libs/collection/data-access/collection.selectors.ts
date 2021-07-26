import { CollectionItemModel } from '../core';
import { CollectionState } from './collection.state';

export const getCollectionCategory = (
  state: CollectionState,
  category: string | undefined
): CollectionItemModel[] => {
  const ids = category
    ? state.itemsIdsByCategory[category] ?? []
    : state.itemsIds;

  const items = ids.map((id) => state.itemById[id]);

  return items;
};

export const getCategories = (state: CollectionState): string[] =>
  state.categories;
