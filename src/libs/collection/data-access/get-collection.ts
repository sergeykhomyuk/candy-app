import { CollectionItemModel } from '../core';
import collectionApiConfig from './collection-api.config';
import mapCollectionItem from './map-collection-item';

const getCollection = (): Promise<CollectionItemModel[]> =>
  fetch(collectionApiConfig.url)
    .then((response) => response.json())
    .then((response) => response.map(mapCollectionItem));

export default getCollection;
