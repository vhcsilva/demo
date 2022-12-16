import {Col, Row} from "react-bootstrap";
import React, {useEffect, useState} from "react";

import FundingProgress from "./FundingProgress";
import {CaptionMedium, RowWithTwoColumns} from "./Minimals";
import Button from "./Button";

import CustomContainer from "./CustomContainer";
import bounties from "../mocks/bounties";
import { useCustomization } from "../contexts/customization";

export default function FundingSection() {
  const [bounty, setBounty] = useState<any>(null);
  const { token } = useCustomization();

  useEffect(() => {
    setBounty(bounties.find( b => b.id === "69"));
  }, []);

  const transactionalSymbol = `$${token || "USDC"}`;

  return(
    <CustomContainer className="mt-3">
      <RowWithTwoColumns
        col1={
          <h4 className="family-Regular">Funding</h4>
        }
        col2={
          <Button>
            Fund Bounty
          </Button>
        }
      />
      
      <Row className="border-radius-8 bg-gray-900 mt-3 mx-0 p-2 border border-gray-700">
        <Col className="d-grid gap-2">
          <RowWithTwoColumns
            col1={<CaptionMedium text="Current Funding" />}
            col2={<CaptionMedium text="Total Amount" />}
          />

          <FundingProgress
            fundedAmount={bounty?.amount}
            fundingAmount={bounty?.fundingAmount}
            fundingTokenSymbol={transactionalSymbol}
            fundedPercent={bounty?.amount / bounty?.fundingAmount * 100}
          />
        </Col>
      </Row>
    </CustomContainer>
  );
}