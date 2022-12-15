import Link from "next/link";

interface InternalLinkProps {
  label: string;
  href: string;
}
export default function InternalLink({ label, href } : InternalLinkProps) {
  return(
    <Link href={href} className="main-nav-link text-white bg-opacity-100 text-decoration-none shadow-none opacity-75 opacity-100-hover bg-transparent border-transparent text-uppercase">
      <span>{label}</span>
    </Link>
  );
}