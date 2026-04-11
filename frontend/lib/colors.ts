export function hexToRgb(hex: string) {
  const val = parseInt(hex.replace("#", ""), 16);
  return { r: (val >> 16) & 255, g: (val >> 8) & 255, b: val & 255 };
}
export function uint24ToHex(color: number): string {
  return "#" + color.toString(16).padStart(6, "0");
}

// colors: 1775827636566

// colors: 1775870939234

// colors: 1775919613638
