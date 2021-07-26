import React, { useMemo, useState } from 'react';
import { OperationState } from 'src/libs/core/api';
import Loader from 'src/libs/design-system/loader';
import ErrorMessage from 'src/libs/design-system/error-message';
import {
  getCategories,
  getCollectionCategory,
  useCollection,
} from '../data-access';
import { CollectionFilters, CollectionGrid, Layout } from '../ui';

export function CollectionContainer(): JSX.Element {
  const [category, setCategory] = useState<string | undefined>();
  const [operationState, state] = useCollection();

  const collectionItems = useMemo(
    () => getCollectionCategory(state, category),
    [state, category]
  );
  const categories = useMemo(() => getCategories(state), [state]);

  const onCategoryChanged = (value: string | undefined) => setCategory(value);

  return (
    <Layout>
      {(operationState === OperationState.Loading ||
        operationState === OperationState.Initial) && <Loader />}
      {operationState === OperationState.Failed && <ErrorMessage />}
      {operationState === OperationState.Loaded && (
        <>
          <CollectionFilters
            categories={categories}
            category={category}
            onCategoryChanged={onCategoryChanged}
          />
          <CollectionGrid category={category} items={collectionItems} />
        </>
      )}
    </Layout>
  );
}

export default CollectionContainer;
