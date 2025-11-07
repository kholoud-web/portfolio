import { createTheme } from '@mui/material/styles';

export const ToggleTheme = (mode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          primary: { main: '#1976d2' },
          background: { default: '#f5f5f5', paper: '#ffffff' },
          text: { primary: '#666' },
        }
      : {
          primary: { main: '#90caf9' },
          background: { default: '#181818ff', paper: '#1d1d1d' },
          text: { primary: '#ffffff' },
        }),
  },
  typography: {
    fontFamily: 'Open Sans',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '8px',
          transition: 'all 0.3s ease',
        },
      },
    },
  },
});

export const createAppTheme = (mode) => createTheme(ToggleTheme(mode));
