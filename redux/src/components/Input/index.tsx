
const Input = (props:any) => {
  return <input {...props} />;
};

const CustomizeInput = ({value = "", ...props}) => (
  <div style={{padding: 10}}>
    <Input style={{outline: "none"}} value={value} {...props} />
  </div>
);

export default CustomizeInput;