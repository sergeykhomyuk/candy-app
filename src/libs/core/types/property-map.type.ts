export type PropertyMap<TSource, TResult> = {
  [TProperty in keyof TSource]: TResult;
};
