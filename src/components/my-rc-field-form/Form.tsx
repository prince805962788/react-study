import React from "react";
import FieldContext from "./FieldContext";
import useForm from "./useForm";

export default function Form(
  { children = null, form = {}, onFinish=()=>{}, onFinishFailed=()=>{} },
  ref: any
) {
  const [formInstance] = useForm(form);

  React.useImperativeHandle(ref, () => formInstance);
  formInstance.setCallbacks({
    onFinish,
    onFinishFailed,
  });
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        formInstance.submit();
      }}
    >
      <FieldContext.Provider value={formInstance}>
        {children}
      </FieldContext.Provider>
    </form>
  );
}