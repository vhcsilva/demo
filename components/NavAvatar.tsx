import Identicon from "./Identicon";

export default function NavAvatar() {
  return(
    <div className="cursor-pointer popover-without-arrow profile-menu">
      <Identicon address="0x4B37DBe33E012C6707eC691cE911e2930B23474c" />
    </div>
  );
}