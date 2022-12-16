/* eslint-disable react-hooks/exhaustive-deps */
import { useCustomization } from "../contexts/customization";
import Button from "./Button";
import ImageUploader from "./ImageUploader";
import Modal from "./Modal";
import { useState, useEffect } from "react";
import axios from "axios";
import { psReadAsText } from "../helpers/file-reader";
import ColorPicker from "./ColorPicker";
import { addToIpfs } from "../services/ipfs";
import getConfig from "next/config";

interface UploadImage {
  preview?: string;
  raw?: File;
}

const { publicRuntimeConfig: { ipfsPublicEndpoint } } = getConfig();
export default function EditModal({
  show,
  onClose
}) {
  const { logo, name, token, primary, setLogo, setToken, setName, setPrimary } = useCustomization();

  const [newLogo, setNewLogo] = useState<UploadImage>();
  const [newName, setNewName] = useState<string>();
  const [newToken, setNewToken] = useState<string>();
  const [newPrimary, setNewPrimary] = useState<string>();
  const [isLoading, setIsLoading] = useState(false);

  async function handleUpdate() {
    if (!newLogo) return;

    setIsLoading(true);

    const image =  await psReadAsText(newLogo.raw as File);

    addToIpfs(image as string)
      .then(({path}) => {
        setName(newName);
        setPrimary(newPrimary);
        setLogo({ preview: `${ipfsPublicEndpoint}/${path}`, raw: undefined});
        setToken(newToken);
        onClose();
      })
      .finally(() => setIsLoading(false));
  }

  useEffect(() => {
    if (!newLogo) setNewLogo(logo);
    if (!newName) setNewName(name);
    if (!newToken) setNewToken(token);
    if (!newPrimary) setNewPrimary(primary);
  }, [logo, name, token, primary]);

  return(
    <Modal
      show={show}
      size="lg"
    >
      <div className="d-flex flex-column edit-modal">
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
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">$</span>
            </div>
            <input type="text" className="form-control" value={newToken} onChange={e => setNewToken(e.target.value)} />
          </div>
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

          <Button color="shadow" onClick={onClose} disabled={isLoading}>
            Cancel
          </Button>
        </div>
      </div>
    </Modal>
  );
}