import { useCustomization } from "../contexts/customization";
import Button from "./Button";
import ImageUploader from "./ImageUploader";
import Modal from "./Modal";
import { useState, useEffect } from "react";
import axios from "axios";
import { psReadAsText } from "../helpers/file-reader";
import ColorPicker from "./ColorPicker";

interface UploadImage {
  preview?: string;
  raw?: File;
}
export default function EditModal({
  show,
  onClose
}) {
  const { logo, name, token, primary, setLogo, setToken, setName, setPrimary } = useCustomization();

  const [newLogo, setNewLogo] = useState<UploadImage>({ preview: undefined, raw: undefined });
  const [newName, setNewName] = useState<string>();
  const [newToken, setNewToken] = useState<string>();
  const [newPrimary, setNewPrimary] = useState<string>();
  const [isLoading, setIsLoading] = useState(false);

  function handleClose() {
    if (isLoading) return;

    setNewLogo({ preview: "", raw: undefined });
    setNewName("");
    setNewToken("");
    setNewPrimary("");
    onClose();
  }

  async function handleUpdate() {
    setIsLoading(true);

    const image =  await psReadAsText(newLogo.raw as File);

    axios.post("/api/image", {
      image
    })
      .then(({ data }) => {
        setName(newName);
        setPrimary(newPrimary);
        setLogo({ preview: data, raw: undefined});
        setToken(newToken);
        handleClose();
      })
      .finally(() => setIsLoading(false));
  }

  return(
    <Modal
      show={show}
      size="lg"
    >
      <div className="d-flex flex-column">
        <span className="family-Regular text-primary text-uppercase">Try it out</span>
        <h4 className="font-weight-medium mb-2">Bounty Network</h4>
        <span className="text-gray-500 family-Regular">Manage your network details.</span>

        <hr />

        <span className="text-white family-Regular h4 font-weight-normal mb-3">Logo</span>

        <ImageUploader
          value={newLogo}
          onChange={setNewLogo}
        />

        <span className="text-gray-500 family-Regular mt-3">Pick a logo for your network. Recommended file type is SVG.</span>

        <hr />

        <span className="text-white family-Regular h4 font-weight-normal">General</span>

        <div className="col-8 mt-3 mb-2">
          <label className="family-Regular text-14">Network Name</label>
          <input type="text" className="form-control" value={newName} onChange={e => setNewName(e.target.value)} />
        </div>

        <div className="col-8 mb-2">
          <label className="family-Regular text-14">Network TOKEN</label>
          <input type="text" className="form-control" value={newToken} onChange={e => setNewToken(e.target.value)} />
        </div>

        <div className="col-8">
          <label className="family-Regular text-14">Pick a main colour for your network.</label>
          <ColorPicker
            selected={newPrimary}
            setSelected={setNewPrimary}
          />
        </div>

        <hr />

        <div className="d-flex flex-row gap-2">
          <Button onClick={handleUpdate} disabled={isLoading} isLoading={isLoading}>
            Update
          </Button>

          <Button color="shadow" onClick={handleClose} disabled={isLoading}>
            Cancel
          </Button>
        </div>
      </div>
    </Modal>
  );
}