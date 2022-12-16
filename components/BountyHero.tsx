import Image from "next/image";
import React, {useEffect, useState} from "react";

import GithubInfo from "./GithubInfo";
import BountyStatusInfo from "./BountyStatusInfo";
import CustomContainer from "./CustomContainer";

import bounties from "../mocks/bounties";
import { useRouter } from "next/router";
import { useCustomization } from "../contexts/customization";
import Link from "next/link";
import BackIcon from "../assets/icons/back-icon";

export default function BountyHero() {
  const [bounty, setBounty] = useState<any>(null);

  const { token, name } = useCustomization();

  useEffect(() => {
    setBounty(bounties.find( b => b.id === "69"));
  }, []);

  return (
    <div className="banner-shadow pt-5">
      <CustomContainer>
        <div className="d-flex flex-row">
          <div className="col-12 col">
            <div className="row border-bottom border-gray-850">
              <Link href="/" className="text-decoration-none svg-primary text-primary caption-medium font-weight-medium d-flex flex-row align-items-center gap-2 pb-3">
                <BackIcon />
                Back to bounties explorer
              </Link>
            </div>

            <div className="row pt-3 border-bottom border-gray-850 align-items-center pb-3">
              <div className="col-auto">
                <h4 className="me-2 text-gray-700 font-weight-normal">#{bounty?.id}</h4>
              </div>
              <div className="col-auto flex-grow-1">
                <h4>{bounty?.title} &#8205;</h4>
              </div>

              <div className="col">
                <div className="row align-items-center justify-content-center">
                  <div className={`price-conversor rounded-5 py-3 px-3 bg-gray-900 d-flex align-items-center justify-content-around cursor-pointer`}>
                    <span className="text-white caption-large">
                      {bounty?.amount?.toLocaleString('en-US', { currency: "USD"})}
                      <span className="text-primary ml-1 caption-small">${token || "BEPRO"}</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-3 pt-1 row align-items-center justify-content-md-start gap-20">
              <div className="col-auto">
                <div className="d-flex flex-row align-items-center">
                  <span className="caption-small text-gray-500 mr-2">State</span>
                  <BountyStatusInfo issueState={bounty?.status} />
                </div>
              </div>

              <div className="col-auto">
                <div className="d-flex flex-row align-items-center">
                  <span className="caption-small text-gray-500 mr-2">Bounty owner</span>
                  <span className="mr-1">
                    <Image
                        src={bounty?.creator?.image}
                        width={24}
                        height={24}
                        alt={bounty?.creator?.name}
                      />
                  </span>
                  <span className="caption-small">
                    {bounty?.creator?.name}
                  </span>
                </div>
              </div>

              <div className="col-auto">
                <div className="d-flex flex-row align-items-center">
                  <span className="caption-small text-gray-500 mr-2">Opened</span>
                  <span className={`caption-small text-light-gray`}>
                    {bounty?.creationDate}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-3 pt-1 row align-items-center justify-content-md-start gap-20">
              <div className="col-auto">
                <div className="d-flex flex-row align-items-center">
                  <span className="caption-small text-gray-500 mr-2">Repository</span>
                  <GithubInfo
                    parent="list"
                    variant="repository"
                    label={name || bounty?.repository}
                  />
                </div>
              </div>

              <div className="col-auto">
                <div className="d-flex flex-row align-items-center">
                  <span className="caption-small text-gray-500 mr-2">Branch</span>
                  <span className="text-primary caption-small">{bounty?.branch}</span>
                </div>
              </div>

              <div className="col-auto">
                <div className="d-flex flex-row align-items-center">
                  <span className="text-white caption-small mr-1">367</span>
                  <span className="caption-small text-gray-500">Funders</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CustomContainer>
    </div>
  );
}
