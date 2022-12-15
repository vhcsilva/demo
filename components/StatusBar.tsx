import CopyIcon from "../assets/icons/copy-icon";
import DownloadIcon from "../assets/icons/download-icon";
import EditIcon from "../assets/icons/edit-icon";

export default function StatusBar({ takeScreenshot, setShowEditModal }) {

  return (
    <div
      className={`position-fixed z-index-max bottom-0 w-100 px-3 py-2 d-flex d-flex flex-row align-items-center justify-content-end`}
      id="status-bar"
    >
      <button className="action-button" onClick={setShowEditModal}>
        <EditIcon />
      </button>

      <button className="action-button" onClick={takeScreenshot}>
        <CopyIcon />
      </button>

      <button className="action-button">
        <DownloadIcon />
      </button>
    </div>
  );
}
