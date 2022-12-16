import {Fragment, useState} from "react";

export default function BountyRoadmap() {
  const [stepColor, setStepColor] = useState<string>("primary");
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [steps,] = useState<string[]>([
    "Funding",
    "Development",
    "Disputes & Validation",
    "Closed"
  ]);

  function toRepresentationHeight() {
    return currentStep === 0 ? "1px" : `${currentStep * 66.7}px`;
  }

  function heightIssueProgressHorizontal() {
    return "200px";
  }

  function renderColumn(stepLabel, index) {
    const style = { top: index === 0 ? "0" : `${index * 66.7}px`, left: "7px" };
    const dotClass = `d-flex align-items-center justify-content-center rounded-circle bg-${
      currentStep >= index ? stepColor : "light-gray"
    }`;
    const dotStyle = { width: "12px", height: "12px" };
    const labelStyle = { left: "40px" };
    const currentItem = currentStep === index;
    const isLastItem = currentStep === steps.length - 1;

    return (
      <Fragment key={index}>
        <div
          className="position-absolute d-flex align-items-center flex-column"
          style={style}
        >
          <div className={dotClass} style={dotStyle}>
            <div
              className={`rounded-circle bg-${
                currentItem && !isLastItem && "white"
              }`}
              style={{ width: "6px", height: "6px" }}
            ></div>
            <div
              className="position-absolute d-flex align-items-start flex-column mt-1"
              style={labelStyle}
            >
              <label
                className={`text-uppercase caption mb-1 text-${currentItem ? stepColor : "gray-700"}`}
              >
                {stepLabel}
              </label>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }

  return (
    <div className="container">
      <div className="row">
        <div className="ps-0 col-md-12">
          <div className="content-wrapper mb-4 pb-0 pt-0 issue-proposal-progress bg-gray-950 border border-gray-700">
            <div className="d-flex justify-content-start mb-3 pt-4">
              <span className="caption-large">Bounty state</span>
            </div>
            <div className="row">
              <div className="position-relative">
                <div className="progress bg-light-gray issue-progress-horizontal" style={{
                  height: `${heightIssueProgressHorizontal()}`
                }}>
                  <div
                    className={`progress-bar w-100 bg-${stepColor}`}
                    role="progressbar"
                    style={{
                      height: `${toRepresentationHeight()}`
                    }}
                  >
                    {steps.map(renderColumn)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
