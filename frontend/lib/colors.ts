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

// colors: 1775966004475

// colors: 1776045855291

// colors: 1776062161127

// colors: 1776083308993

// colors: 1776115484297

// colors: 1776143164392

// colors: 1776170050882

// colors: 1776185556821

// colors: 1776214563329

// colors: 1776247238210

// colors: 1776255788837

// colors: 1776268975775

// colors: 1776314875804

// colors: 1776330412534

// colors: 1776348853805

// colors: 1776371865431

// colors: 1776400460142

// colors: 1776431035221

// colors: 1776458963269

// colors: 1776478425916

// colors: 1776492465677
