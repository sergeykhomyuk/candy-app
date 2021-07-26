import { useEffect, useReducer, useState } from 'react';
import { OperationState } from 'src/libs/core/api';
import { CollectionAction, collectionReducer } from './collection.reducer';
import { collectionInitialState, CollectionState } from './collection.state';
import getCollection from './get-collection';

const useCollection = (): [OperationState, CollectionState] => {
  const [operationState, setOperationState] = useState(OperationState.Initial);

  const [state, dispatch] = useReducer(
    collectionReducer,
    collectionInitialState
  );

  useEffect(() => {
    let isCancelled = false;

    const loadCollection = async () => {
      setOperationState(OperationState.Loading);

      try {
        const collection = await getCollection();

        if (!isCancelled) {
          setOperationState(OperationState.Loaded);
          dispatch({
            type: CollectionAction.UpdateAll,
            payload: { items: collection },
          });
        }
      } catch {
        if (!isCancelled) {
          setOperationState(OperationState.Failed);
        }
      }
    };

    loadCollection();

    return () => {
      isCancelled = true;
    };
  }, []);

  return [operationState, state];
};

export default useCollection;
