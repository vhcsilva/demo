import { Col, ProgressBar, Row } from "react-bootstrap";

import ArrowRightLine from "../assets/icons/arrow-right-line";

import { Amount, ColAuto, RowCenterBetween, RowWithTwoColumns } from "./Minimals";

export default function FundingProgress({
  fundedAmount,
  fundingAmount,
  fundedPercent,
  fundingTokenSymbol,
  amountToFund = "0"
} : any) {
  const fundingPercent = amountToFund * 100 / fundingAmount;
  const totalPercent = fundingPercent + fundedPercent;

  const AmountWithPreview = ({ amount, preview = undefined, type }) => 
    <Row className="align-items-center">
      <Col>
        <Amount amount={amount} type={type} />
      </Col>
    </Row>;

  return(
    <div>
      <RowWithTwoColumns
        col1={<AmountWithPreview amount={fundedAmount} type="currency" />}
        col2={<Amount 
                amount={fundingAmount} 
                symbol={fundingTokenSymbol}
              />}
      />

      <RowCenterBetween className="mt-1">
        <Col>
          <ProgressBar>
            <ProgressBar
              now={+fundedPercent}
              isChild
            />
          </ProgressBar>
        </Col>

        <ColAuto>
          <AmountWithPreview amount={fundedPercent} preview={totalPercent.toFixed(2, 1)} type="percent" />
        </ColAuto>
      </RowCenterBetween>
    </div>
  );
}