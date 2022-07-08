export function logger({getState = ()=>{}}) {
  return (next:any) => (action:any) => { // action为dispatch
    console.log('logger','返回的next函数',next,'next函数的入参action',action)
    console.log("====================================");
    console.log(action.type + "执行了！"); //sy-log

    const prevState = getState();
    console.log("prev state", prevState); //sy-log

    const returnValue = next(action);
    const nextState = getState();
    console.log("next state", nextState); //sy-log
    console.log("====================================");
    return returnValue;
  };
}
export function thunk({dispatch= ()=>{}, getState= ()=>{}}) {
  return (next:any) => (action:any) => {
    console.log('thunk','返回的next函数',next,'next函数的入参action',action)
    console.log("====================================");
    if (typeof action === "function") {
      return action(dispatch, getState);
    }
    return next(action);
  };
}