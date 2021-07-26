import React from 'react';
import PropTypes from 'prop-types';
import { Masonry } from 'masonic';
import { ErrorIcon } from 'src/libs/design-system/icons';
import { CollectionItemModel, collectionItemPropType } from '../../core';
import CollectionGridItem from './CollectionGridItem';
import styles from './CollectionGrid.module.scss';

export interface CollectionGridProps {
  category?: string;
  items: CollectionItemModel[];
}

function CollectionGrid({ category, items }: CollectionGridProps): JSX.Element {
  return items.length > 0 ? (
    <Masonry
      key={category}
      items={items}
      columnGutter={16}
      columnWidth={248}
      overscanBy={5}
      render={CollectionGridItem}
    />
  ) : (
    <div className={styles.emptyGrid}>
      <ErrorIcon className={styles.emptyIcon} />
      <div className={styles.title}>No results found.</div>
      <div className={styles.subTitle}>
        It seems we can’t find any results based on your search.
      </div>
    </div>
  );
}

CollectionGrid.propTypes = {
  category: PropTypes.string,
  items: PropTypes.arrayOf(collectionItemPropType).isRequired,
};

CollectionGrid.defaultProps = {
  category: undefined,
};

export default React.memo(CollectionGrid);
