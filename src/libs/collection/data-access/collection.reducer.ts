import { ReducerActionType, StringMap } from 'src/libs/core/types';
import { CollectionItemModel, getImageCategory } from '../core';
import { CollectionState } from './collection.state';

export enum CollectionAction {
  UpdateAll,
}

export interface UpdateAllCollectionActionPayload {
  items: CollectionItemModel[];
}

export type CollectionActionPayload = UpdateAllCollectionActionPayload;

const updateAllReducer = (
  state: CollectionState,
  payload: UpdateAllCollectionActionPayload
): CollectionState => {
  const categoriesSet = new Set<string>();
  const itemsIds: string[] = [];
  const itemsIdsByCategory: StringMap<string[]> = {};
  const itemById: StringMap<CollectionItemModel> = {};

  payload.items.forEach((item) => {
    const category = item.image && getImageCategory(item.image);
    if (category) {
      categoriesSet.add(category);
      itemsIdsByCategory[category] = itemsIdsByCategory[category]
        ? [...itemsIdsByCategory[category], item.id]
        : [item.id];
    }

    itemsIds.push(item.id);
    itemById[item.id] = item;
  });

  return {
    categories: Array.from(categoriesSet.values()),
    itemById,
    itemsIds,
    itemsIdsByCategory,
  };
};

export const collectionReducer = (
  state: CollectionState,
  action: ReducerActionType<CollectionAction, CollectionActionPayload>
): CollectionState => {
  switch (action.type) {
    case CollectionAction.UpdateAll:
      return updateAllReducer(
        state,
        action.payload as UpdateAllCollectionActionPayload
      );
    default:
      return state;
  }
};
