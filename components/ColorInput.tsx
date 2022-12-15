import { useRef, useState } from "react";
import AddIcon from "../assets/icons/add-icon";

export default function ColorInput({ onChange }) {
  const [color, setColor] = useState();
  const debounce = useRef<NodeJS.Timeout>();
  const pickerRef = useRef<any>();

  function handleChange(event) {
    setColor(event.target.value.toUpperCase());
    onChange(event.target.value.toUpperCase());
  }

  function openPicker() {
    if (pickerRef.current ) pickerRef.current.click();
  }

  return (
    <div className="color-preview-wrapper d-flex flex-row align-items-center justify-content-center" onClick={openPicker}>
      <div className="color-preview-item d-flex flex-row align-items-center justify-content-center border border-gray-700 border-primary-hover">
        <AddIcon />
      </div>

      <div className={`custom-color-input`}>
        <input
          type="color"
          value={color}
          onChange={handleChange}
          ref={pickerRef}
        />
      </div>
    </div>
  );
}
