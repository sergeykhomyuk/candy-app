import React, { Suspense } from 'react';
import Loader from 'src/libs/design-system/loader';
import ErrorMessage from 'src/libs/design-system/error-message';
import { ErrorBoundary } from './libs/core/exceptions';
import { Layout } from './libs/layout/ui';

const CollectionContainer = React.lazy(
  () => import('./libs/collection/shell/CollectionContainer')
);

function App(): JSX.Element {
  return (
    <Layout>
      <Suspense fallback={<Loader />}>
        <ErrorBoundary fallback={ErrorMessage}>
          <CollectionContainer />
        </ErrorBoundary>
      </Suspense>
    </Layout>
  );
}

export default App;
