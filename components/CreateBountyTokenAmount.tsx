import { useCustomization } from "../contexts/customization";
import InputNumber from "./InputNumber";
import TokensDropdown from "./TokensDropdown";


export default function CreateBountyTokenAmount({
  currentToken,
  setCurrentToken,
  addToken,
  canAddCustomToken,
  defaultToken = null,
  userAddress,
  customTokens,
  labelSelect,
  tokenBalance,
  issueAmount,
  setIssueAmount,
  review = false,
  needValueValidation,
  decimals = 18
}: any) {
  const { token } = useCustomization();

  return (
    <div className="container">
      <div className="col-md-12 mt-4">
        <TokensDropdown
          token={currentToken}
          label={labelSelect}
          disabled={review}
          defaultToken={defaultToken}
          showCurrencyValue={needValueValidation}
          needsBalance
        />
      </div>
      <div className="col-md-12">
        <div className="d-flex">
          <InputNumber
            fullWidth={true}
            thousandSeparator
            disabled={review}
            value="10000"
            label={
              <div className="d-flex mb-2">
                <label className="flex-grow-1 caption-small text-gray align-items-center">
                  <span className="mr-1">
                    Set Bounty Token
                  </span>{" "}
                </label>
              </div>
            }
            symbol={token || "BEPRO"}
            placeholder="0"
            allowNegative={false}
            decimalScale={decimals}
          />
        </div>
      </div>
    </div>
  );
}
