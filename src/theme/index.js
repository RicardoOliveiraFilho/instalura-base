import { typographyVariants } from './typographyVariants';

const colors = {
  background: {
    light: {
      color: '#FFFFFF',
    },
    main: {
      color: '#F2F2F2',
    },
  },
  borders: {
    main: {
      color: '#F1F1F1',
    },
  },
  primary: {
    main: {
      color: '#D7385E',
      contrastText: '#FFFFFF',
    },
  },
  secondary: {
    main: {
      color: '#FB7B6B',
      contrastText: '#FFFFFF',
    },
  },
  tertiary: {
    main: {
      color: '#070C0E',
      contrastText: '#FFFFFF',
    },
    light: {
      color: '#88989E',
      contrastText: '#FFFFFF',
    },
  },
  modes: {
    dark: {},
  },
};

export default {
  colors,
  borderRadius: '8px',
  transition: '200ms ease-in-out',
  fontFamily: "'Rubik', sans-serif",
  typographyVariants,
  breakpoints: {
    xs: 0,
    sm: 480,
    md: 768,
    lg: 992,
    xl: 1200,
  },
};
