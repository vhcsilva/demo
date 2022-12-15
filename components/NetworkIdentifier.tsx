import Indicator from "./Indicator";

export default function NetworkIdentifier() {
  return (
    <div className="ml-2 bg-transparent p-0 d-flex flex-row align-items-center justify-content-center">
      <Indicator bg="#29b6af" />
      <span className="caption-small text-white-50 ">
        Mainnet
      </span>
    </div>
  );
}
