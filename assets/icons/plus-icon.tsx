import { SVGProps } from "react";

export default function PlusIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      color="white"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M32 16.2857C32 17.3903 31.1046 18.2857 30 18.2857H19.2857C18.7334 18.2857 18.2857 18.7334 18.2857 19.2857V30C18.2857 31.1046 17.3903 32 16.2857 32H15.7143C14.6097 32 13.7143 31.1046 13.7143 30V19.2857C13.7143 18.7334 13.2666 18.2857 12.7143 18.2857H2C0.895429 18.2857 0 17.3903 0 16.2857V15.7143C0 14.6097 0.895431 13.7143 2 13.7143H12.7143C13.2666 13.7143 13.7143 13.2666 13.7143 12.7143V2C13.7143 0.895429 14.6097 0 15.7143 0H16.2857C17.3903 0 18.2857 0.895431 18.2857 2V12.7143C18.2857 13.2666 18.7334 13.7143 19.2857 13.7143H30C31.1046 13.7143 32 14.6097 32 15.7143V16.2857Z"
        fill="currentColor"
      />
    </svg>
  );
}
