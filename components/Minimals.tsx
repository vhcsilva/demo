import { Col, Row } from "react-bootstrap";

export const RowCenterBetween = ({ children, className = "" }) => 
    <Row className={`align-items-center justify-content-between ${className}`}>
      {children}
    </Row>;
  
export const ColAuto = ({ children, className="" }) => <Col xs="auto" className={className}>{children}</Col>;

export const CaptionMedium = ({ text, color = "gray-70" }) => 
  <span className={`caption-medium text-${color} font-weight-normal`}>{text}</span>;

export const CaptionLarge = ({ text, color = "gray-70" }) => 
  <span className={`caption-large text-${color} font-weight-normal`}>{text}</span>;

export const Amount = ({ 
  amount = 0, 
  symbol = undefined, 
  symbolColor = "primary", 
  className = undefined, 
  type = "currency" 
}: {
  amount: number | string;
  symbol?: string;
  symbolColor?: string;
  className?: string;
  type?: "currency" | "percent";
}) => 
  <span className={`family-Regular ${className || "h4 text-white"}`}>
    {type === "currency" && amount.toLocaleString('en-US', { currency: "USD"})}
    
    {type === "percent" && `${amount.toLocaleString('en-US', { currency: "USD"})}%`}

    {(type === "currency" && symbol) && 
      <span className={`ml-1 ${ className && "caption-small" || "caption-medium"} text-${symbolColor}`}>
        {symbol}
      </span>
    }
  </span>;

export const RowWithTwoColumns = ({ col1, col2 = undefined, filler = false, className = "" } : {
  col1: React.ReactNode;
  col2?: React.ReactNode;
  filler?: boolean;
  className?: string;
}) => 
  <RowCenterBetween className={className}>
    <ColAuto>
      {col1}
    </ColAuto>

    { filler &&
      <ColAuto className="flex-grow-1">
        <div className="border-bottom-dashed border-disabled"></div>
      </ColAuto>
    }

    { col2 && 
      <ColAuto>
        {col2}
      </ColAuto>
    }
  </RowCenterBetween>;