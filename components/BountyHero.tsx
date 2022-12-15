import Image from "next/image";
import React, {useEffect, useState} from "react";

import GithubInfo from "./GithubInfo";
import BountyStatusInfo from "./BountyStatusInfo";
import CustomContainer from "./CustomContainer";

import bounties from "../mocks/bounties";

export default function BountyHero() {
  const [bounty, setBounty] = useState<any>(null);

  useEffect(() => {
    setBounty(bounties.find( b => b.id === "69"));
  }, []);

  return (
    <div className="banner-shadow pt-5">
      <CustomContainer>
        <div className="d-flex flex-row">
          <div className="col-10 row">
            <div className="d-flex flex-row">
              <h4 className="me-2 text-white-70">#{bounty?.id}</h4>
              <h4>{bounty?.title}</h4>
            </div>
            
            <div className="mt-3 pt-1 d-inline-flex align-items-center justify-content-md-start gap-20">
              <BountyStatusInfo issueState={bounty?.status} />

              <div className="d-flex align-items-center">
                <span className="mr-1">
                  <Image
                    src={bounty?.creator?.image}
                    width={24}
                    height={24}
                    alt={bounty?.creator?.name}
                  />
                </span>
                <GithubInfo
                  parent="hero"
                  variant="user"
                  label={bounty?.creator?.name}
                />
              </div>

              <span className="caption-small">
                <GithubInfo
                    parent="list"
                    variant="repository"
                    label={bounty?.repository}
                  />
              </span>

              <span className="caption-small text-light-gray text-uppercase">
                Branch
                <span className="text-primary">:{bounty?.branch}</span>
              </span>
            </div>

            <div className="mt-3 pt-1 d-inline-flex align-items-center justify-content-md-start gap-20">
              <div>
                <span className="caption-small mr-1 text-white">
                  {bounty?.working || 0}
                </span>
                <span className="caption-small text-white-40 text-uppercase">
                  Working
                </span>
              </div>

              <div>
                <span className="caption-small mr-1 text-white">
                  {bounty?.proposals?.length || 0}
                </span>
                <span className="caption-small text-white-40 text-uppercase">
                  Proposals
                </span>
              </div>

              <span className={`caption-small text-light-gray`}>
                {bounty?.creationDate}
              </span>
            </div>
          </div>
         
          <div className="col-1 d-flex align-items-center justify-content-center">
            <div className={`price-conversor rounded-5 py-2 px-3 bg-black d-flex align-items-center justify-content-around cursor-pointer`}>
              <span className="text-white caption-large">
                {bounty?.amount?.toLocaleString('en-US', { currency: "USD"})}
              </span>
              <span className="text-primary ms-2 caption-medium">{bounty?.token}</span>
            </div>
          </div>
        </div>
      </CustomContainer>
    </div>
  );
}
