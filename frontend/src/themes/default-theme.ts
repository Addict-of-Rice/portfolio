import type { ThemeConfig } from './theme'

export const defaultTheme: ThemeConfig = {
  font: {
    heading: "Inter",
    body: "Inter",
  },
  bodySize: 1,
  typeScale: 1.333,
  color: {
    text: {
      hue: 243,
      saturation: 76,
      lightness: 5,
    },
    background: {
      hue: 240,
      saturation: 60,
      lightness: 99,
    },
    primary: {
      hue: 243,
      saturation: 68,
      lightness: 48,
    },
    secondary: {
      hue: 243,
      saturation: 100,
      lightness: 93,
    },
    accent: {
      hue: 242,
      saturation: 100,
      lightness: 62,
    }
  }
}