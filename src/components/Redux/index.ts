interface listenerType {
  (): void
}
export default function createStore(
  reducer:any,
  enhancer?:any
) {
  if (enhancer) {
    // const next_1 = enhancer(createStore)
    // const next_2 = next_1(reducer)
    // return next_2
    return enhancer(createStore)(reducer);
  }

  let currentState:any
  let currentListeners:Array<listenerType> = [];

  function getState() {
    return currentState;
  }
  function dispatch(action:any) {
    currentState = reducer(currentState, action);
    currentListeners.forEach(listener => listener());
    return action;
  }

  function subscribe(listener:listenerType) {
    currentListeners.push(listener);
    return () => {
      const index = currentListeners.indexOf(listener);
      currentListeners.splice(index, 1);
    };
  }

  dispatch({type: "KKBREDUX/OOOO"});

  return {
    getState,
    dispatch,
    subscribe
  };
}