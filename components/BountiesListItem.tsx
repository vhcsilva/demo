import React from "react";
import {useRouter} from "next/router";

import BountyStatusInfo from "./BountyStatusInfo";
import Image from "next/image";

export default function BountiesListItem({ issue }) {
  const router = useRouter();

  const isFundingRequest = issue.fundingAmount > 0;

  function renderIssueData(state: any) {
    const types = {
      open: {
        value: issue?.working?.length,
        translation: "Working",
      },
      ready: {
        value: issue?.pullRequests?.length,
        translation: "Pull Requests",
      },
      proposal: {
        value: issue?.mergeProposals?.length,
        translation: "Proposals",
      },
    };

    if (["open", "ready", "proposal"].includes(state?.toLowerCase())) {
      const { value, translation } = types[state?.toLowerCase()];
      return (
        <div className="d-flex align-items-center" key={issue.githubId}>
          <span className="caption-medium mr-1 text-white">
            {value || 0}
          </span>
          <span className="caption-medium text-white-40 text-uppercase">
            {translation}
          </span>
        </div>
      );
    } else return <></>;
  }

  function renderAmount() {
    const isActive = ["closed", "canceled"].includes(issue?.state);
    
    const percentage = issue.amount / issue.fundingAmount * 100;
    
    return (
      <div
        className={`row justify-content-md-center m-0 px-1 pb-1 rounded-5 ${
          !isActive ? "bg-black" : "bg-dark-gray"
        } `}
      >
        <div className="px-0 pt-1 col-md-12">
          <span
            className={`caption-large text-opacity-1 text-white${
              isActive && "-40"
            }`}
          >
            {issue.amount.toLocaleString('en-US', { currency: "USD"})}{" "}

            <label
              className={`caption-small text-uppercase ${
                !isActive ? "text-primary" : "text-white-40"
              }`}
            >
              {issue.token}
            </label>
          </span>
        </div>

        {(isFundingRequest && issue.amount < issue.fundingAmount) && (
          <>
            <div className={`p-0 col-md-6 col-10 mt-1`}>
              <div className="bg-dark-gray w-100 issue-funding-progress">
                <div
                  className={`bg-primary issue-funding-progress`}
                  style={{ width: `${percentage}%` }}
                />
              </div>
            </div>
            <div
              className={`issue-percentage-text caption-small py-0 pe-0 ps-1 pb-1 col-2 col-md-2 text-white`}
            >
              {percentage}%
            </div>
          </>
        )}
      </div>
    );
  }

  return (
    <div
      className="bg-shadow list-item p-3"
      onClick={() => {
        router.push({
          pathname: "/[network]/bounty",
          query: {
            id: issue.id,
            network: router.query.network
          },
        });
      }}
    >
      <div className="row align-center">
        <div className="col-md-10 mb-3 mb-md-0">
          <h4 className="h4 text-truncate mb-3">
            <span className="text-white-40 me-2">#{issue.id}</span>
            {issue.title}
          </h4>
          <div className="d-flex align-center flex-wrap align-items-center justify-content-md-start mt-2 gap-20">
            <BountyStatusInfo issueState={issue.status} />
            
            <div className="d-flex align-items-center">
              <div className="mr-2">
                <Image
                  src={issue.creator.image}
                  width={24}
                  height={24}
                  alt={issue.creator.name}
                />
              </div>

              <div className="bg-primary rounded-4 px-2 py-1">
                <span className="caption-medium text-uppercase mw-github-info">
                  {issue.repository}
                </span>
              </div>
            </div>

            {renderIssueData(issue.status)}

            <span className="caption-medium text-white-40">
              {issue?.creationDate}
            </span>
            
          </div>
        </div>

        <div className="col-md-2 my-auto text-center">{renderAmount()}</div>
      </div>
    </div>
  );
}
