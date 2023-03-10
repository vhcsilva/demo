import { SVGProps } from "react";

export default function ArrowRightLine(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="8"
      height="9"
      viewBox="0 0 8 9"
      fill="none"
      color="#35E0AD"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.63683 1.37676C3.43626 1.17619 3.43626 0.851 3.63683 0.650428C3.83741 0.449857 4.1626 0.449857 4.36317 0.650428L7.84957 4.13683C8.05014 4.3374 8.05014 4.6626 7.84957 4.86317L4.36317 8.34957C4.1626 8.55014 3.8374 8.55014 3.63683 8.34957C3.43626 8.149 3.43626 7.82381 3.63683 7.62324L6.24647 5.0136L0.513596 5.0136C0.229945 5.0136 2.7196e-07 4.78365 2.96758e-07 4.5C3.21555e-07 4.21635 0.229945 3.9864 0.513596 3.9864L6.24647 3.9864L3.63683 1.37676Z"
        fill="currentColor"
      />
    </svg>
  );
}
