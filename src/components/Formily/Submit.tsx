import { useParentForm } from "./which";

export default function Submit(props:any) {
  const  {
    onClick,
    onSubmit,
    onSubmitSuccess,
    onSubmitFailed,
    children,
    ...otherProps
  } = props
  const form = useParentForm();

  return (
    <button
      type="button"
      onClick={() => {
          if (onClick) {
            if (onClick() === false) return
          }
          if (onSubmit) {
            form.submit(onSubmit).then(onSubmitSuccess).catch(onSubmitFailed)
          }
        }
      }
      {...otherProps}
    >
      {children}
    </button>
  );
}