import { TaskActionTypes, TasksState } from "./types";
import tasksReducer from "./reducer";

interface Store<S, A> {
  getState: () => S;
  dispatch: (action: A) => void;
  subscribe: (listener: () => void) => () => void;
}

export const createStore = <S, A>(
  reducer: (state: S, action: A) => S,
  initialState: S,
): Store<S, A> => {
  let state = initialState;
  let listeners: (() => void)[] = [];

  const getState = (): S => state;

  const dispatch = (action: A): void => {
    state = reducer(state, action);
    listeners.forEach((listener) => listener());
  };

  const subscribe = (listener: () => void): (() => void) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  };

  return { getState, dispatch, subscribe };
};

interface RootState {
  tasks: TasksState;
}

export const combineReducers =
  <S, A>(reducers: {
    [K in keyof S]: (state: S[K] | undefined, action: A) => S[K];
  }) =>
  (state: S | undefined, action: A): S => {
    const newState: S = {} as S;

    (Object.keys(reducers) as Array<keyof S>).forEach((key) => {
      newState[key] = reducers[key](state ? state[key] : undefined, action);
    });

    return newState;
  };

export const rootReducer = combineReducers<RootState, TaskActionTypes>({
  tasks: tasksReducer,
});

const store = createStore<RootState, TaskActionTypes>(rootReducer, {
  tasks: [],
});

export default store;
