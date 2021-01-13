import { createMuiTheme } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'

// Create a theme instance.
const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sh: 375,
      sm: 576,
      md: 900,
      lg: 1280,
      xl: 1920,
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          backgroundColor: '#f5f5f7',
          fontSize: '14px',
          lineHeight: '20px',
          fontFamily: "'San-Francisco', sans-serif",
        },
      },
    },
    MuiContainer: {
      root: {
        paddingLeft: '15px',
        paddingRight: '15px',
        '@media (min-width: 600px)': {
          paddingLeft: '15px',
          paddingRight: '15px',
        },
      },
      maxWidthLg: {
        '@media (min-width: 1280px)': {
          maxWidth: '1160px',
        },
      },
    },
    MuiFilledInput: {
      root: {
        backgroundColor: '#fff',
        '&:hover': {
          backgroundColor: '#fff',
        },
        borderRadius: '6px',
      },

      // underline: {
      //   '&:after': {
      //     borderBottom: `2px solid #FFFFFF`,
      //   },
      //   '&$focused:after': {
      //     borderBottomColor: `#FFFFFF`,
      //   },
      //   '&$error:after': {
      //     borderBottomColor: `#FFFFFF`,
      //   },
      //   '&:before': {
      //     borderBottom: `1px solid #FFFFFF`,
      //   },
      //   '&:hover:not($disabled):not($focused):not($error):before': {
      //     borderBottom: `2px solid #FFFFFF`,
      //   },
      //   '&$disabled:before': {
      //     borderBottom: `1px dotted #FFFFFF`,
      //   },
      // },
    },

    MuiButton: {
      root: {
        minWidth: '100px',
        textTransform: 'none',
        padding: '10px 20px',
        fontSize: '16px',
        lineHeight: '24px',
        fontWeight: 'normal',
        transition: 'transform .2s ease-in-out',
        borderRadius: '8px',
      },
      fullWidth: {
        maxWidth: '100%',
      },
      sizeSmall: {
        fontSize: '16px',
        lineHeight: '21px',
        padding: '13px 40px',
        textTransform: 'none',
      },
      sizeLarge: {
        maxWidth: '100%',
        fontSize: '20px',
        lineHeight: '30px',
        padding: '17px 65px',
        textTransform: 'none',
      },
      outlinedPrimary: {
        paddingTop: '17px',
        paddingBottom: '17px',
        '&:hover': {
          backgroundColor: 'transparent',
        },
      },
      contained: {
        boxShadow: 'none',
        '&:hover, &:active': {
          boxShadow: 'none',
        },
      },
      containedPrimary: {
        '&:hover, &:active': {
          backgroundColor: '#005bb6',
        },
      },
      containedSecondary: {
        background: '#d6d6d6 !important',
        '&:hover, &:active': {
          background: '#c3c3c3 !important',
        },
      },
    },
    MuiFormControlLabel: {
      root: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        margin: 0,
        padding: '0',
        borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
        '&:last-child': {
          borderBottom: 'none',
        },
      },
    },
    MuiCheckbox: {
      root: {
        '&$checked': {
          '&:hover': {
            backgroundColor: 'transparent !important',
          },
        },
        '&:hover': {
          backgroundColor: 'transparent !important',
        },
      },
    },
    MuiIconButton: {
      root: {
        borderRadius: 0,
        fontSize: '16px',
        padding: '6px !important',
      },
    },
    MuiTabs: {
      root: {
        display: 'block',
      },
    },
    MuiDialog: {
      paper: {
        width: '100%',
      },
      paperWidthSm: {
        maxWidth: '500px',
      },
    },
    MuiDialogTitle: {
      root: {
        fontSize: '32px !important',
        '& MuiTypography-root': {},
      },
    },
  },
  palette: {
    primary: {
      main: '#0066cc',
    },
    secondary: {
      main: '#FFF',
    },
    error: {
      main: red.A400,
    },
    background: {
      main: '#f5f5f7',
    },
  },
  typography: {
    fontFamily: "'San-Francisco', sans-serif",
    body1: {
      fontSize: '14px',
      lineHeight: '20px',
      color: '#1d1d1f',
    },
    body2: {
      fontFamily: "'San-Francisco', sans-serif",
      fontSize: '16px',
    },
    h2: {
      fontSize: '48px',
      lineHeight: '52px',
      fontWeight: 600,
    },
    h3: {
      fontSize: '19px',
      lineHeight: '23px',
      fontWeight: 600,
    },
    h6: {
      fontSize: '14px',
      lineHeight: '18px',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: '4px',
  },
  spacing: 8,
  props: {
    MuiButton: {
      disableRipple: true,
      variant: 'contained',
      color: 'primary',
    },
    MuiCheckbox: {
      disableRipple: true,
      color: 'primary',
      size: 'small',
    },
    MuiTextField: {
      variant: 'filled',
      border: '1px solid  var(--border)',
      color: 'primary',
      fontFamily: "'San-Francisco', sans-serif",
    },
    MuiPaper: {
      elevation: 0,
    },
    MuiCard: {
      elevation: 0,
    },
    MuiListItem: {
      disableRipple: true,
      disableFocusRipple: true,
    },
    MuiTabs: {
      disableRipple: false,
      disableFocusRipple: false,
    },
  },
})

export default theme
