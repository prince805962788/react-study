export default function combineReducers(reducers:Record<string,any>) {
  return function combination(state:Record<string,any> = {}, action:any) {
    let nextState:Record<string,any> = {};
    let hasChanged = false;

    for (let key in reducers) {
      if (reducers.hasOwnProperty(key)) {
        const reducer = reducers[key];
        nextState[key] = reducer(state[key], action);
        hasChanged = hasChanged || nextState[key] !== state[key];
      }
    }

    hasChanged = hasChanged || Object.keys(reducers).length !== Object.keys(state).length;

    return hasChanged ? nextState : state;
  };
}