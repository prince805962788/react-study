// import { configureStore } from "@reduxjs/toolkit";

// function countReducer(state = 0, action:Record<string,any>) {
//   switch (action.type) {
//     case "ADD":
//       return state + 1;
//     case "MINUS":
//       return state - 1;
//     default:
//       return state;
//   }
// }

// const store = configureStore({
//   reducer: countReducer
// });
import createStore from '@/components/Redux';
import applyMiddleware from '@/components/Redux/applyMiddleware';
import combineReducers from '@/components/Redux/combineReduce';
import { logger, thunk } from '@/components/Redux/helper';

function countReducer(state = 0, action:Record<string,any>) {
  switch (action.type) {
    case "ADD":
      return state + 1;
    case "MINUS":
      return state - 1;
    default:
      return state;
  }
}
const store = createStore(combineReducers({count: countReducer}),applyMiddleware(logger,thunk));

export default store;