import {useEffect, useState,} from "react";
import {FormCheck} from "react-bootstrap";

import BranchesDropdown from "./BranchesDropdown";
import Button from "./Button";
import CreateBountyDetails from "./CreateBountyDetails";
import CreateBountyProgress from "./CreateBountyProgress";
import CreateBountyTokenAmount from "./CreateBountyTokenAmount";
import GithubInfo from "./GithubInfo";
import Modal from "./Modal";
import ReposDropdown from "./ReposDropdown";

export default function CreateBountyModal({
  show,
  handleClose
} : any) {

  const [currentSection, setCurrentSection] = useState<number>(0);
  const [isBountyType, setisBountyType] = useState<boolean>(true);
  const [progressPercentage, setProgressPercentage] = useState<number>(0);

  const steps = [
    "Details",
    "Bounty",
    "Additional Details",
    "Review",
  ];

  function renderDetails(review = false) {
    return (
      <CreateBountyDetails
        review={review}
      />
    );
  }

  function renderBountyToken(review = false, type: "bounty" | "reward") {
    return (
      <CreateBountyTokenAmount
        labelSelect={ review && "" || "Set Bounty Token"}
        review={review}
      />
    );
  }

  function renderCurrentSection() {

    if (currentSection === 0) {
      return renderDetails();
    }
    if (currentSection === 1) {
      return (
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <Button
                color="black"
                className={`container-bounty w-100 bg-30-hover ${
                  isBountyType && "funding-type"
                }`}
              >
                <span>Bounty</span>
              </Button>
            </div>
            <div className="col-md-6">
              <Button
                color="black"
                className={`container-bounty w-100 bg-30-hover ${
                  !isBountyType && "funding-type"
                }`}
              >
                <span>Funding Request</span>
              </Button>
            </div>
            {renderBountyToken(false, "bounty")}
          </div>
        </div>
      );
    }
    if (currentSection === 2) {
      return (
        <div className="container pt-4">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <ReposDropdown
                value={{
                  label: "bepro",
                  value: "bepro"
                }}
              />
            </div>
            <div className="col-md-6">
              <BranchesDropdown
                value={{
                  value: "main",
                  label: "main"
                }}
              />
            </div>
          </div>
        </div>
      );
    }
    if (currentSection === 3) {
      return (
        <>
          {renderDetails(true)}
          {renderBountyToken(true, "bounty")}
          <div className="container">
            <div className="row">
              <div className="col-md-6 text-truncate">
                <label className="caption-small mb-2">
                  Repository
                </label>
              <GithubInfo
                parent="list"
                variant="repository"
                label="bepro"
                simpleDisabled={true}
              />
              </div>
              <div className="col-md-6 text-truncate">
                <label className="caption-small mb-2 ms-3">
                  Branch
                </label>
                <div className="ms-3">
                  <GithubInfo
                    parent="list"
                    variant="repository"
                    label="main"
                    simpleDisabled={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }
  }

  function handleNextStepAndCreate() {
    if (currentSection + 1 < steps.length)
      setCurrentSection((prevState) => prevState + 1);
  }

  //TODO: add some function
  function verifyNextStepAndCreate() {
    return false;
  }

  function handleCancelAndBack() {
    if (currentSection === 0) {
      handleClose();
    } else {
      setCurrentSection((prevState) => prevState - 1);
    }
  }

  function setProgressBar() {
    const progress = [0, 30, 60, 100];
    setProgressPercentage(progress[steps.findIndex((value) => value === steps[currentSection])]);
  }

  useEffect(() => {
    if(show) setProgressBar();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSection, show]);

  return (
    <>
      <Modal
        show={show}
        title="Create New Bounty"
        titlePosition="center"
        onCloseClick={handleClose}
        footer={
          <>
            <div className="d-flex flex-row justify-content-between">
              <Button 
                color="dark-gray" 
                onClick={handleCancelAndBack} 
              >
                <span>
                  {currentSection === 0
                    ? "cancel"
                    : "Back"}
                </span>
              </Button>

              <Button
                  className="d-flex flex-shrink-0 w-40 btn-block"
                  onClick={handleNextStepAndCreate}
                  disabled={verifyNextStepAndCreate()}
                >
                  <span>
                    {currentSection !== 3
                      ? "Next Step"
                      : "Create Bounty"}
                  </span>
                </Button>
            </div>
          </>
        }
      >
        <CreateBountyProgress
            steps={steps}
            currentSection={currentSection}
            progressPercentage={progressPercentage}
          />
        {renderCurrentSection()}
      </Modal>
    </>
  );
}
