import { useDropzone } from "react-dropzone";

import ClipIcon from "../assets/icons/clip-icon";
import InfoIconEmpty from "../assets/icons/info-icon-empty";


export default function DragAndDrop (review: any) {
  const useDrop = {
    accept: "image/jpeg, image/png, application/pdf",
    maxSize: 12288800, //32mb (max size ipfs)
  };

  const { getRootProps, getInputProps, isDragActive, isDragReject } = useDropzone(useDrop);

  return (
    <>
      <div className="d-flex flex-wrap align-items-center text-center">
        {!review && (
          <button
          {...getRootProps({
            className:
              "dropzone border border-dark-gray bg-transparent rounded-pill p-2 mr-2"
          })}
        >
          <input {...getInputProps()} />
          <div className="d-flex justify-content-center align-items-center text-center">
            {!isDragActive && (
              <>
                <ClipIcon className="me-1" />{" "}
                <span className="text-white text-uppercase">
                  Attach File
                </span>
              </>
            )}
          </div>
        </button>
        )}
         { !review &&
            <span className="d-inline-flex align-items-center p-small text-warning text-center my-2 tran">
            <InfoIconEmpty width={12} height={12} color="text-warning" className="mr-1"/> 
            File size limit is 10MB
          </span>
         }
      </div>
    </>
  );
}
