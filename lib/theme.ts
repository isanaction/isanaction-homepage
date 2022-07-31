import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        fontFamily: 'Hiragino Sans',
        bg: 'gray.100',
        letterSpacing: '0.1px',
        minHeight: '100vh',
        /* mobile viewport bug fix */
        minJeight: '-webkit-fill-available',
        height: '-webkit-fill-available',
      },
      a: {
        color: 'brand.main',
      },
    },
  },
});
