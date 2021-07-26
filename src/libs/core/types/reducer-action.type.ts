export type ReducerActionType<TAction, TPayload> = {
  type: TAction;
  payload?: TPayload;
};
