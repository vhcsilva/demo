import { components as RSComponents, SingleValueProps } from "react-select";
import Creatable from "react-select/creatable";
import { useCustomization } from "../contexts/customization";
export default function TokensDropdown({
  defaultToken,
  tokens,
  addToken,
  setToken,
  canAddToken,
  label = undefined,
  description = undefined,
  userAddress,
  disabled = false,
  showCurrencyValue = true,
  needsBalance
}: any) {
  const { name, token } = useCustomization();
  function SelectOptionComponent({ innerProps, innerRef, data }) {
    const { name, symbol, currentValue, icon } = data.value;

    return (
      <div
        ref={innerRef}
        {...innerProps}
        className={`proposal__select-options d-flex align-items-center text-center p-small p-1 my-1 bg-black rounded`}
      >
        {icon && (
          <img
            src={icon}
            width={14}
            height={14}
            className="mx-2"
          />
        )}
        <span className="mx-2">
          {name}
        </span>
        <div className="d-flex flex-grow-1 justify-content-end text-uppercase me-2">
        { showCurrencyValue && 
              <span>
                {currentValue?.toLocaleString('en-US', { currency: "USD"})}
                <span className="text-primary">
                  {symbol}
                </span>
              </span>}
        </div>
      </div>
    );
  }
  function SingleValue (props: SingleValueProps<any>) {
    const data = props.getValue()[0];
    const symbol = data?.symbol;
    
    return (
    <RSComponents.SingleValue {...props}>
      <div className="
        cursor-pointer d-inline-flex 
        align-items-center justify-content-between 
        text-center w-100
      ">
      <div className="flex-grow-0 proposal__select-options d-flex align-items-center text-center p-small p-1">
              {data?.icon && (
                <img
                  src={data?.icon}
                  width={14}
                  height={14}
                  className="mx-2"
                />
              )}
              <span className={`${data ? "mt-1" : "mx-2"}`}>
                {data?.name}
              </span>
          </div>
        <div className="d-flex flex-grow-1 justify-content-end text-uppercase me-2">
        { showCurrencyValue && 
              <span>
                {data?.currentValue?.toLocaleString('en-US', { currency: "USD"})}
                <span className="text-primary ml-1">
                  {symbol}
                </span>
              </span>}
        </div>
      </div>
    </RSComponents.SingleValue>
    )}
    
  return (
    <div className="form-group">
      <label className="caption-small mb-2">{label}</label>
      <Creatable
        className="react-select-container"
        classNamePrefix="react-select"
        createOptionPosition="first"
        defaultValue={{
          name: name || "Bepro Network", 
          symbol: token || "BEPRO",
          currentValue: 1000000,
          icon: ""
        }}
        components={{
          Option: SelectOptionComponent,
          SingleValue
        }}
        isDisabled={disabled}
      />
    </div>
  );
}
