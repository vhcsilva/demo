import { useEffect, useRef, useState } from "react";

import { useRouter } from "next/router";

import FilterIcon from "../assets/icons/filter-icon";

import Button from "./Button";
import IssueFilterBox from "./IssueFilterBox";

export default function BountiesFilters() {
  const node = useRef(null);
  const [show, setShow] = useState(false);

  const repoOptions = [
    { label: "All", value: "all", checked: true },
    { label: "BEPRO", value: "bepro", checked: false }
  ];

  const stateOptions = [
    { label: "All", value: "all", checked: true },
    { label: "Open Bounties", value: "open", checked: false },
    { label: "Ready Bounties", value: "ready", checked: false },
    { label: "Draft Bounties", value: "draft", checked: false },
    { label: "Closed Bounties", value: "closed", checked: false }
  ];

  const timeOptions = [
    { label: "All", value: "all", checked: true },
    { label: "Past Week", value: "week", checked: false },
    { label: "Past Month", value: "month", checked: false },
    { label: "Past Year", value: "year", checked: false }
  ];

  function handleClick(e) {
    // @ts-ignore
    if (node.current.contains(e.target)) return;

    setShow(false);
  }

  function loadOutsideClick() {
    if (show) document.addEventListener("mousedown", handleClick);
    else document.removeEventListener("mousedown", handleClick);

    return () => document.removeEventListener("mousedown", handleClick);
  }

  useEffect(loadOutsideClick, [show]);

  return (
    <div className="position-relative d-flex justify-content-end" ref={node}>
      <Button
        color="black"
        className={`${(show && "border-primary") || ""} rounded-8 m-0`}
        onClick={() => setShow(!show)}
      >
        <FilterIcon />{" "}
        <span>
          Filter
        </span>
      </Button>

      <div
        className={`border border-dark-gray rounded rounded-3 filter-wrapper d-${
          show ? "flex" : "none"
        } justify-content-start align-items-stretch position-absolute`}
      >
        <div>
          <IssueFilterBox
            className="h-100 border border-right border-dark-gray"
            title="Repository"
            options={repoOptions}
            filterPlaceholder="Search repositories"
          />
        </div>

        <div>
          <IssueFilterBox
            title="Bounty state"
            options={stateOptions}
          />

          <IssueFilterBox
            title="Timeframe"
            options={timeOptions}
          />
        </div>
      </div>
    </div>
  );
}
