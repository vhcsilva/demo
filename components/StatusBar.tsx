import NetworkIdentifier from "./NetworkIdentifier";

export default function StatusBar() {

  function renderNetworkStatus() {
    const indicatorStyle = { height: ".5rem", width: ".5rem" };
    const indicatorClass = `d-inline-block me-2 rounded bg-success`;

    return (
      <a
        className="text-decoration-none text-white-50"
        href="https://bepronetwork.statuspage.io/"
        target="_blank"
        rel="noreferrer"
      >
        <span className={indicatorClass} style={indicatorStyle} />
        <span className="caption-small mr-2">
          Operational 50ms
        </span>
      </a>
    );
  }

  return (
    <div
      className={`position-fixed bg-shadow bottom-0 w-100 px-3 py-0 d-flex border-disabled 
        border-top d-flex flex-row align-items-center`}
      id="status-bar"
    >
      <div className="border-disabled-right">
        {renderNetworkStatus()}
      </div>

      <div className="ms-3 flex-grow-1 text-center text-uppercase family-Regular status-bar-text text-light-gray">
        <span>Bepro Network Services and BEPRO Token are not available in Excluded Jurisdictions. By accessing and using the interface you agree with our</span>
        <a
          href="https://www.bepro.network/terms"
          target="_blank"
          className="ms-2 text-decoration-none text-primary"
          rel="noreferrer">
          Terms & Conditions
        </a>
      </div>

      <div className="border-disabled-left py-1">
        <NetworkIdentifier />
      </div>
    </div>
  );
}
