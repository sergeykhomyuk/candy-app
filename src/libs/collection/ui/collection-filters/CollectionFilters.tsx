import React, { SyntheticEvent } from 'react';
import PropTypes from 'prop-types';
import { capitalize } from 'src/libs/core/utils';
import styles from './CollectionFilters.module.scss';

export interface CollectionFiltersProps {
  category?: string;
  categories: string[];
  onCategoryChanged: (category: string) => void;
}

function CollectionFilters({
  category,
  categories,
  onCategoryChanged,
}: CollectionFiltersProps): JSX.Element {
  const onChange = (event: SyntheticEvent<HTMLSelectElement>) =>
    onCategoryChanged((event.target as HTMLSelectElement).value);

  return (
    <div className={styles.collectionFilters}>
      Category:
      <select
        onChange={onChange}
        value={category}
        className={styles.categoryFilter}
      >
        <option value="">All</option>
        <option disabled>──────────</option>
        {categories.map((option) => (
          <option key={option} value={option}>
            {capitalize(option)}
          </option>
        ))}
      </select>
    </div>
  );
}

CollectionFilters.propTypes = {
  category: PropTypes.string,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  onCategoryChanged: PropTypes.func.isRequired,
};

CollectionFilters.defaultProps = {
  category: undefined,
};

export default CollectionFilters;
