import React from "react";
import FieldContext from "./FieldContext";

export default function Field(props: {children:any, name: string, rules?:Array<any>}) {
  const { children, name } = props;

  const { getFieldValue, setFieldsValue, registerFieldEntities } =
    React.useContext(FieldContext) as any;

  const [, forceUpdate] = React.useReducer((x) => x + 1, 0);

  React.useLayoutEffect(() => {
    registerFieldEntities({
      props,
      onStoreChange: forceUpdate,
    });
  }, []);

  const getControlled = () => {
    return {
      value: getFieldValue(name), //"omg", // get state
      onChange: (e:any) => {
        const newValue = e.target.value;
        // set state
        setFieldsValue({ [name]: newValue });
      },
    };
  };

  const returnChildNode = React.cloneElement(children, getControlled());
  return returnChildNode;
}