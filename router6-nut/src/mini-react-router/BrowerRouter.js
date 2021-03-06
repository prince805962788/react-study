// @ts-nocheck
import { createBrowserHistory } from 'history';
import { useLayoutEffect, useRef, useState } from "react";
import Router from "./Router";

export default function BrowserRouter({children}){
  let historyRef = useRef();
  if (historyRef.current == null) {
    historyRef.current = createBrowserHistory();
  }

  let history = historyRef.current;

  const [state, setState] = useState({location: history.location});

  useLayoutEffect(()=>{
    history.listen(setState)
  }, [history])

  return <Router children={children} navigator={history} location={state.location}/>;
}