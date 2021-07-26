import { StringMap } from 'src/libs/core/types';
import { CollectionItemModel } from '../core';

export interface CollectionState {
  categories: string[];
  itemsIds: string[];
  itemsIdsByCategory: StringMap<string[]>;
  itemById: StringMap<CollectionItemModel>;
}

export const collectionInitialState: CollectionState = {
  categories: [],
  itemsIds: [],
  itemById: {},
  itemsIdsByCategory: {},
};
