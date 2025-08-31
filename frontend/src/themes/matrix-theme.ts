import type { ThemeConfig } from './theme'

export const matrixTheme: ThemeConfig = {
  font: {
    heading: "IBM Plex Mono, monospace",
    body: "IBM Plex Mono, monospace",
  },
  bodySize: 1,
  typeScale: 1.333,
  color: {
    text: {
      hue: 246,
      saturation: 76,
      lightness: 5,
    },
    background: {
      hue: 240,
      saturation: 60,
      lightness: 99,
    },
    primary: {
      hue: 145,
      saturation: 68,
      lightness: 48,
    },
    secondary: {
      hue: 123,
      saturation: 100,
      lightness: 93,
    },
    accent: {
      hue: 165,
      saturation: 100,
      lightness: 62,
    }
  }
}