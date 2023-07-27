// styles
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import 'vuetify/styles'

// composables
import { createVuetify } from 'vuetify'

// types
import type { ThemeDefinition } from 'vuetify'

export const CLARA_LIGHT_THEME_NAME = 'claraLightTheme';
export const CLARA_DARK_THEME_NAME = 'claraDarkTheme';

const claraGray = {
  'claraGray': '#416576',
  'claraGray-lighten-6': '#E0E0E0',
  'claraGray-lighten-5': '#E3ECF2',
  'claraGray-lighten-4': '#C1D0D7',
  'claraGray-lighten-3': '#9CB0BA',
  'claraGray-lighten-2': '#77919E',
  'claraGray-lighten-1': '#5C7B89',
  'claraGray-darken-1': '#365766',
  'claraGray-darken-2': '#294551',
  'claraGray-darken-3': '#1C333D',
  'claraGray-darken-4': '#0C1F27',
}

const claraLightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    surface: '#F5F5F5',
    alternative: '#ECE6F7',
    primary: '#632BBE',
    secondary: '#E21D26',
    accent: '#C70010',
    error: '#B00020',
    info: '#1090C0',
    success: '#008664',
    warning: '#FDB813',
    background: '#FFFFFF',
    highlight: '#fff900',
    highContrast: '#000000',
    claraDarkOrange: '#F37051',
    tooltipAlternative: '#E3ECF2',
    anchor: '#000000',
    ...claraGray,
  }
}

const claraDarkTheme: ThemeDefinition = {
  dark: true,
  colors: {
    surface: '#1E3037',
    alternative: '#41485F',
    primary: '#B298DE',
    secondary: '#E21D26',
    accent: '#C70010',
    error: '#CF6679',
    background: '#0C1F27',
    highlight: '#6b39b7',
    anchor: '#FFFFFF',
    success: '#008664',
    warning: '#FDB813',
    info: '#1090C0',
    highContrast: '#FFFFFF',
    claraDarkOrange: '#F37051',
    tooltipAlternative: '#365766',
    ...claraGray,
  }
}

export default createVuetify({
  theme: {
    defaultTheme: CLARA_LIGHT_THEME_NAME,
    themes: {
      [CLARA_LIGHT_THEME_NAME]: claraLightTheme,
      [CLARA_DARK_THEME_NAME]: claraDarkTheme,
    }
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
})
