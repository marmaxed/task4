import { useState } from "react";

const isValidHex = (hex: string) => /^#[0-9A-Fa-f]{6}$/.test(hex);

const hexToRgb = (hex: string): string => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgb(${r}, ${g}, ${b})`;
};

const HexToRgbConverter = () => {
  const [hex, setHex] = useState("");
  const [rgb, setRgb] = useState("");
  const [bgColor, setBgColor] = useState("white");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setHex(value);

    if (value.length === 7) {
      if (isValidHex(value)) {
        const rgbValue = hexToRgb(value);
        setRgb(rgbValue);
        setBgColor(value);
      } else {
        setRgb("Ошибка!");
        setBgColor("white");
      }
    } else {
      setRgb("");
      setBgColor("white");
    }
  };

  return (
    <div className="converter" style={{ backgroundColor: bgColor }}>
      <input
        className="converter-input"
        type="text"
        value={hex}
        onChange={handleChange}
        placeholder="#RRGGBB"
        maxLength={7}
      />
      <div className="converter-result">
        {rgb}
      </div>
    </div>
  );
};

export default HexToRgbConverter;