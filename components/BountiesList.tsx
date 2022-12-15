import React, {useEffect, useRef, useState} from "react";
import {FormControl, InputGroup} from "react-bootstrap";

import {useRouter} from "next/router";

import SearchIcon from "../assets/icons/search-icon";

import CustomContainer from "./CustomContainer";
import ListSort from "./ListSort";

import bounties from "../mocks/bounties";
import BountiesListItem from "./BountiesListItem";
import BountiesFilters from "./BountiesFilters";


export default function BountiesList() {
  const router = useRouter();

  return (
    <CustomContainer>
      <div
          className={"d-flex align-items-center gap-20 list-actions sticky-top"}
        >
          <div className="w-100">
            <InputGroup className="border-radius-8">
              <InputGroup.Text className="cursor-pointer">
                <SearchIcon />
              </InputGroup.Text>

              <FormControl
                className="p-2"
                placeholder="Search for a bounty"
              />
            </InputGroup>
          </div>

          <div className="d-flex align-items-center">
            <span className="caption-small text-white-50 text-nowrap mr-1">
              Sort
            </span>

            <ListSort
              options={[
                {
                  value: "newest",
                  sortBy: "createdAt",
                  order: "DESC",
                  label: "Newest"
                },
                {
                  value: "oldest",
                  sortBy: "createdAt",
                  order: "ASC",
                  label: "Oldest"
                },
                {
                  value: "highest-bounty",
                  sortBy: "amount,fundingAmount",
                  order: "DESC",
                  label: "Highest Bounty"
                },
                {
                  value: "lowest-bounty",
                  sortBy: "amount,fundingAmount",
                  order: "ASC",
                  label: "Lowest Bounty"
                }
              ]}
            />
          </div>

          <BountiesFilters />
        </div>
        
        {
          bounties.map((issue : any) => (
            <BountiesListItem issue={issue} key={issue.id} />
          ))
        }
    </CustomContainer>
  );
}
