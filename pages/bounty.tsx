import React, {useEffect, useState} from "react";

import {useRouter} from "next/router";

import BountyHero from "../components/BountyHero";
import FundingSection from "../components/FundingSection";
import BountyComments from "../components/BountyComments";
import BountyDescription from "../components/BountyDescription";
import BountyRoadmap from "../components/BountyRoadmap";

import bounties from "../mocks/bounties";
import ThemeInjector from "../components/ThemeInjector";

export default function PageIssue() {
  const router = useRouter();

  const [bounty, setBounty] = useState<any>(null);

  const { id } = router.query;

  useEffect(() => {
    setBounty(bounties.find( b => b.id === "69"));
  }, []);

  return (
    <div className="pt-5">
      <ThemeInjector />
      <BountyHero />

      <FundingSection />

      <div className="container mb-1 mt-4">
        <div className="d-flex bd-highlight justify-content-center mx-2 px-4">
          <div className="ps-3 pe-0 ms-0 me-2 w-65 bd-highlight">
            <div className="container">
              <BountyDescription description={bounty?.description} />
            </div>
          </div>
          <div className="p-0 me-3 flex-shrink-0 w-25 bd-highlight">
            <div className="sticky-bounty">
              <BountyRoadmap />
            </div>
          </div>
        </div>
      </div>

      <BountyComments
        comments={bounty?.comments}
        repo={bounty?.repository}
        issueId={id}
      />
    </div>
  );
}
