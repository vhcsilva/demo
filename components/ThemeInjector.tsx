import {useEffect, useState} from "react";
import { useCustomization } from "../contexts/customization";

const hexadecimalToRGB = (hexadecimal: string) => hexadecimal?.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (m, r, g, b) => "#" + r + r + g + g + b + b)?.substring(1)?.match(/.{2}/g)?.map((x) => parseInt(x, 16)) || [];

export default function ThemeInjector() {
  const [currentColors, setCurrentColors] = useState("");
  
  const { primary } = useCustomization();

  useEffect(() => {
    if (primary)
      setCurrentColors(`:root {
        --bs-bg-opacity: 1;
        ${`--bs-primary: #${primary}; 
        --bs-primary-rgb: ${hexadecimalToRGB(`#${primary}`).join(",")};`}
      }`);
    else
      setCurrentColors("");
  }, [primary]);

  return (
    <>
      <style>{currentColors}</style>
    </>
  );
}
