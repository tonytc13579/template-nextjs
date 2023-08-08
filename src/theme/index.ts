import { ComponentStyleConfig, extendTheme } from '@chakra-ui/react';
import { Inter, Titillium_Web } from 'next/font/google';

const inter = Inter({
  weight: '400',
  subsets: ['latin'],
});

const titillium = Titillium_Web({
  weight: '400',
  subsets: ['latin'],
});

const Text: ComponentStyleConfig = {
  baseStyle: {
    fontsize: '14px',
    color: 'black',
  },
};

const breakpoints = {
  sm: '500px',
  md: '768px',
  minPC: '1024px',
  midPC: '1280px',
  lg: '1440px',
  xl: '1920px',
  xxl: '2560px',
};

const customTheme = extendTheme({
  breakpoints,
  fonts: {
    primary: `${inter.style.fontFamily}`,
    titillium: `${titillium.style.fontFamily}`,
  },
  colors: {
    text: {
      primary: '#1c1c1c',
      secondary: '#999999',
      accent: '#0DB774',
      blue: '#1588FF',
    },
    brand: {
      primary: {
        50: '#efe4ff',
        100: '#cdb3ff',
        200: '#a37ef2',
        300: '#8a4dfe',
        400: '#6a1cfd',
        500: '#5103e4',
        600: '#3e01b2',
        700: '#2c0080',
        800: '#1b004f',
        900: '#0a001f',
      },
      info: {
        50: '#dff1ff',
        100: '#afd2ff',
        200: '#7eb3ff',
        300: '#4c95ff',
        400: '#1b77fd',
        500: '#025de4',
        600: '#0048b2',
        700: '#003480',
        800: '#001f50',
        900: '#000a20',
      },
      success: {
        50: '#dbfff3',
        100: '#b0fbdf',
        200: '#84f8ca',
        300: '#55f3b7',
        400: '#28f0a2',
        500: '#0fd788',
        600: '#02a769',
        700: '#00774b',
        800: '#00492b',
        900: '#001a0b',
      },
      warning: {
        50: '#ffefdb',
        100: '#ffd5ae',
        200: '#ffba7e',
        300: '#ff9e4c',
        400: '#ff831a',
        500: '#e66900',
        600: '#b45200',
        700: '#813900',
        800: '#4f2200',
        900: '#200900',
      },
      danger: {
        50: '#ffe5e9',
        100: '#f9bcc2',
        200: '#ee919a',
        300: '#e66673',
        400: '#dd3b4b',
        500: '#c42231',
        600: '#991826',
        700: '#6e101a',
        800: '#44070e',
        900: '#1e0001',
      },
    },
    background: {
      primary: '#fff',
      white: '#fff',
    },
  },
  styles: {
    global: {
      body: {
        bgColor: 'background.default',
        color: 'text.primary',
      },
      a: {
        _hover: {
          color: 'inherit',
        },
      },
    },
  },
  components: {
    Text,
  },
});

export default customTheme;
