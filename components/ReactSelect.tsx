import Select from "react-select";

 //TODO: Need to rework components to be able to use Props correctly { Props }
export default function ReactSelect(params: any) { // eslint-disable-line 
  return (
    <Select
    classNamePrefix="react-select"
    {...params}
    className={`react-select-container ${params?.className}`}
    />
  );
}
