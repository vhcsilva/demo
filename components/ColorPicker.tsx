/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import ColorInput from "./ColorInput";

export default function ColorPicker({
  selected,
  setSelected
}) {
  const [colors, setColors] = useState([
    "#EB5757",
    "#FF6A2C",
    "#FFD646",
    "#35E0AD",
    "#4250E4",
    "#9669ED"
  ]);

  function handleAdd(color) {
    if (!colors.find(c => c === color))
      setColors([...colors.slice(0, 5), color]);
  }

  function handleSet(color) {
    setSelected(color.replace("#", ""));

    handleAdd(color);
  }

  useEffect(() => {
    if (selected) handleAdd(`#${selected}`);
  }, [selected]);

  return(
    <div className="d-flex flex-row gap-2">
      {colors.map( color => 
      <div 
        key={color} 
        className={`color-preview-wrapper d-flex flex-row align-items-center justify-content-center ${`#${selected}` === color && "selected" || ""}`}
        onClick={() => handleSet(color)}>
        <div className="color-preview-item" style={{ backgroundColor: color }}>
        
      </div>
      </div>)}

      <ColorInput onChange={handleSet} />
    </div>
  );
}