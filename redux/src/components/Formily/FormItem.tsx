import { useContext } from "react";
import { FieldContext, observer } from "./which";

const FormItem = observer(({children = undefined}) => {

  const field = useContext<any>(FieldContext);

  return (
    <div>
      <div>{field.title}</div>
      {children}
      <div className="red">{field.selfErrors.join(",")}</div>
    </div>
  );
});

export default FormItem;