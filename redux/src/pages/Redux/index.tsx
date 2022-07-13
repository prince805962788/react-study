import store from "@/store";
import { useState } from "react";
import styles from './index.less';

const useStorePages: React.FC =()=>{
  const [count, setCount] = useState(store.getState().count) 
  store.subscribe(()=>{
    setCount(store.getState().count)
  })
  const asyAdd = () => {
    store.dispatch((dispatch:any) => {
      setTimeout(() => {
        dispatch({type: "ADD", payload: 1});
      }, 1000);
    });
  };
  const minus = () => {
    store.dispatch({type: "MINUS"})
  };
  return (
    <div className={styles.container}>
      <h3>ReduxPage</h3>
      <p>{count}</p>
      <button onClick={asyAdd} type="button">add</button>
      <button onClick={minus} type="button">minus</button>
    </div>
  );
}
export default useStorePages