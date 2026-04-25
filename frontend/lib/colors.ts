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

// colors: 1776517050122

// colors: 1776548486712

// colors: 1776584112717

// colors: 1776617722912

// colors: 1776643186238

// colors: 1776671095278

// colors: 1776677989849

// colors: 1776700094346

// colors: 1776750248427

// colors: 1776779860923

// colors: 1776803223619

// colors: 1776816058743

// colors: 1776832851439

// colors: 1776861712581

// colors: 1776875134142

// colors: 1776888525049

// colors: 1776937734990

// colors: 1776961077535

// colors: 1777000172157

// colors: 1777023661804

// colors: 1777036050869

// colors: 1777065132305

// colors: 1777101966994
