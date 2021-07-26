import React from 'react';
import { LikeIcon, CommentIcon } from 'src/libs//design-system/icons';
import { Counter } from 'src/libs/design-system/counter';
import { Avatar } from 'src/libs/design-system/avatar';
import { Card } from 'src/libs/design-system/card';
import styles from './CollectionItem.module.scss';
import { CollectionItemModel, collectionItemPropType } from '../../core';

export interface CollectionItemProps {
  item: CollectionItemModel;
}

function CollectionItem({ item }: CollectionItemProps): JSX.Element {
  return (
    <Card imageSrc={item.image} imageAlt={item.text} className={styles.card}>
      <div className={styles.footer}>
        <div className={styles.title}>{item.text}</div>

        <div className={styles.details}>
          <Avatar
            className={styles.ownerAvatar}
            src={item.ownerImage}
            alt={item.ownerName}
          />

          <div className={styles.ownerName}>{item.ownerName}</div>

          <div className={styles.counters}>
            <Counter icon={<LikeIcon />} value={item.likes} />
            <Counter icon={<CommentIcon />} value={item.comments} />
          </div>
        </div>
      </div>
    </Card>
  );
}

CollectionItem.propTypes = {
  item: collectionItemPropType.isRequired,
};

export default CollectionItem;
