
function compose(...funcs:any) {
  if (funcs.length === 0) {
    return (arg:any) => arg;
  }
  if (funcs.length === 1) {
    return funcs[0];
  }
  // ...args就是dispatch，a是thunk第一次返回的next函数，b同理
  return funcs.reduce((a:any, b:any) => (...args:any) => {
    console.log(a,b)
    console.log('...args:',...args)
    // b(dispatch)作为一个新的dispatch成为入参传给a
    return a(b(...args))
  });
}
export default function applyMiddleware(...middlewares:Array<any>){
  return (createStore:any) => (reducer:any) => {
    const store = createStore(reducer)
    let dispatch = store.dispatch

    const midAPI = {
      getState: store.getState,
      dispatch: (action:any,...args:any)=>dispatch(action, ...args),
    }
    const middlewareChain = middlewares.map(middleware=>middleware(midAPI))
    // 新数组里是每个中间件返回的next函数
    console.log('middlewareChain:',...middlewareChain)
    console.log("====================================");
    // 中间件加强版dispatch
    dispatch = compose(...middlewareChain)(store.dispatch)

    return {
      ...store,
      dispatch
    }
  }
}