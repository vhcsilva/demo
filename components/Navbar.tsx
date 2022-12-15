

import { useState } from "react";
import HelpIcon from "../assets/icons/help-icon";
import PlusIcon from "../assets/icons/plus-icon";

import Button from "./Button";
import InternalLink from "./InternalLink";
import NavAvatar from "./NavAvatar";
import TransactionsStateIndicator from "./TransactionIndicator";
import CreateBountyModal from "./CreateBountyModal";

import Image from "next/image";
import { useRouter } from "next/router";

export default function Navbar() {
  const { query } = useRouter();

  const [showModal, setShowModal] = useState(false);

  return (
    <div className="nav-container">
      <div className="main-nav d-flex flex-column justify-content-center">
        <div
          className={`d-flex flex-row align-items-center justify-content-between px-3 py-0`}
        >
          <div className="d-flex">
            <Image
              src={`/images/Bepro_Logo_Light.svg`}
              width={104}
              height={32}
              alt="Logo"
            />

            <ul className="nav-links">
                <li>
                  <InternalLink
                    href={`/${query?.network}`}
                    label="Developers"
                  />
                </li>

                <li>
                  <InternalLink
                    href="#"
                    label="Curators"
                  />
                </li>
                <li>
                  <InternalLink
                    href="#"
                    label="Networks"
                  />
                </li>
                <li>
                  <InternalLink
                    href="#"
                    label="Leaderboard"
                  />
                </li>
              </ul>
          </div>

          <div className="d-flex flex-row align-items-center gap-20">
            <Button
              outline
              textClass="text-white"
              onClick={() => setShowModal(true)}
            >
              <PlusIcon />
              <span>New bounty</span>
            </Button>

            <Button
              className="opacity-75 opacity-100-hover"
              transparent
              rounded
            >
              <HelpIcon />
            </Button>

            <TransactionsStateIndicator />

            <NavAvatar />
          </div>
        </div>
      </div>

      <CreateBountyModal
        show={showModal}
        handleClose={() => setShowModal(false)}
      />
    </div>
  );
}
