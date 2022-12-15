import { useEffect, useState } from "react";
import UploadIcon from "../assets/icons/upload";

export default function ImageUploader({
  value,
  onChange,
}) {
  const [image, setImage] = useState(value);
  
  const dimensions = {
    width: "150",
    height: "80"
  };

  function handleChange(event) {
    if (!event.target.files.length) return;
    
    onChange({
      preview: URL.createObjectURL(event.target.files[0]),
      raw: event.target.files[0]
    });
  }

  useEffect(() => {
    setImage(value);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value?.preview]);

  return (
    <div className="d-flex">
      <label
        className={`bg-black image-uploader border border-white-50 rounded-10 lg d-flex flex-column text-center align-items-center justify-content-center`}
        htmlFor="logoUpload"
      >
        {image?.preview || typeof image === "string" ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={image?.preview || image}
            alt="dummy"
            width={dimensions.width}
            height={dimensions.height}
          />
        ) : (
          <>
            <UploadIcon />
          </>
        )}
      </label>

      <input
        type="file"
        id="logoUpload"
        style={{ display: "none" }}
        accept=".svg"
        onChange={handleChange}
      />
    </div>
  );
}
