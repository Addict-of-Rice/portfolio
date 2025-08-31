export type HSL = {
  hue: number;
  saturation: number;
  lightness: number;
};

export type ThemeConfig = {
  font: {
    heading: string;
    body: string;
  };
  bodySize: number; // default: 1 rem
  typeScale: number;
  color: {
    text: HSL;
    background: HSL;
    primary: HSL;
    secondary: HSL;
    accent: HSL;
  };
};

export type Theme = {
  fontFamily: {
    heading: string;
    body: string;
  };
  fontSize: {
    h1: string;
    h2: string;
    h3: string;
    h4: string;
    h5: string;
    h6: string;
    p: string;
    small: string;
    tiny: string;
  };
  color: {
    text: string;
    background: string;
    primary: string;
    secondary: string;
    accent: string;
  };
};

export const compileTheme = (theme: ThemeConfig, darkMode: boolean): Theme => {
  const { font, bodySize, typeScale, color } = theme;

  const toHSL = (hslColor: HSL) =>
    `hsl(${hslColor.hue}, ${hslColor.saturation}%, ${
      darkMode ? 100 - hslColor.lightness : hslColor.lightness
    }%)`;

  return {
    color: {
      text: toHSL(color.text),
      background: toHSL(color.background),
      primary: toHSL(color.primary),
      secondary: toHSL(color.secondary),
      accent: toHSL(color.secondary),
    },
    fontFamily: font,
    fontSize: {
      h1: `${bodySize * (typeScale ** 6)}rem`,
      h2: `${bodySize * (typeScale ** 5)}rem`,
      h3: `${bodySize * (typeScale ** 4)}rem`,
      h4: `${bodySize * (typeScale ** 3)}rem`,
      h5: `${bodySize * (typeScale ** 2)}rem`,
      h6: `${bodySize * typeScale}rem`,
      p: `${bodySize}rem`,
      small: `${bodySize / typeScale}rem`,
      tiny: `${bodySize / (typeScale ** 2)}rem`,
    },
  };
};
