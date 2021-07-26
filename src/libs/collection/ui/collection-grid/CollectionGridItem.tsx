import React from 'react';
import { RenderComponentProps } from 'masonic';
import { CollectionItemModel } from '../../core';
import CollectionItem from '../collection-item/CollectionItem';

function CollectionGridItem({
  data,
}: RenderComponentProps<CollectionItemModel>): JSX.Element {
  return <CollectionItem item={data} />;
}

export default CollectionGridItem;
