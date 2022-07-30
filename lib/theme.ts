import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        fontFamily: 'Hiragino Sans',
        bg: 'gray.100',
        letterSpacing: '0.1px',
      },
      a: {
        color: 'brand.main',
      },
    },
  },
});
