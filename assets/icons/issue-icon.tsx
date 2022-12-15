import { SVGProps } from "react";

export default function IssueIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      color="white"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M14.4001 15.2384C14.4001 14.3968 15.2187 13.7146 16.2286 13.7146C17.2385 13.7146 18.0572 14.3968 18.0572 15.2384V23.6193C18.0572 24.4609 17.2385 25.1431 16.2286 25.1431C15.2187 25.1431 14.4001 24.4609 14.4001 23.6193V15.2384Z"
        fill="currentColor"
      />
      <path
        d="M18.0572 8.68599C18.0572 9.69589 17.2385 10.5146 16.2286 10.5146C15.2187 10.5146 14.4001 9.69589 14.4001 8.68599C14.4001 7.6761 15.2187 6.85742 16.2286 6.85742C17.2385 6.85742 18.0572 7.6761 18.0572 8.68599Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 29.3333C23.3638 29.3333 29.3333 23.3638 29.3333 16C29.3333 8.6362 23.3638 2.66667 16 2.66667C8.6362 2.66667 2.66667 8.6362 2.66667 16C2.66667 23.3638 8.6362 29.3333 16 29.3333ZM16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z"
        fill="currentColor"
      />
    </svg>
  );
}