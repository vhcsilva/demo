/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import DownloadWhiteIcon from "../assets/icons/download-white-icon";
import Button from "./Button";
import Modal from "./Modal";

export default function DownloadImagesModal({
  show,
  onClose,
  homePrint,
  modalPrint,
  bountyPrint
}) {
  function downloadImages() {
    [{ name: "HomePage.png" , url: homePrint }, { name: "CreateBountyModal.png" , url: modalPrint }, { name: "BountyPage.png" , url: bountyPrint }]
      .filter(c => c.url)
      .forEach(({ name, url }) => {
        const link = document.createElement('a');
        link.download = name;
        link.href = url;
        link.click();
      });
  }

  return(
    <Modal
      show={show}
      size="xl"
    >
      <div className="d-flex flex-column">
        <span className="family-Regular text-primary text-uppercase">Save</span>
        <h4 className="font-weight-medium mb-2">Bounty Network Screens</h4>
        <span className="text-gray-500 family-Regular">Save your desired screens.</span>

        <hr />

        <div className="d-flex flex-row justify-content-center align-items-center gap-3 mb-4 bg-gray-900 border-radius-8 py-5 border border-gray-700">
          { homePrint && <img src={homePrint} height={200} />}
          { modalPrint && <img src={modalPrint} height={200} />}
          { bountyPrint && <img src={bountyPrint} height={200} />}
        </div>

        <div className="d-flex flex-row justify-content-center gap-2">
          <Button onClick={downloadImages}>
            <DownloadWhiteIcon />
            <span>Save all screens to your computer</span>
          </Button>

          <Button color="shadow" onClick={onClose}>
            Cancel
          </Button>
        </div>
      </div>
    </Modal>
  );
}