import { createMuiTheme } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'

// Create a theme instance.
const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          backgroundColor: '#f5f5f7',
          fontSize: '14px',
          lineHeight: '20px',
          color: '#1d1d1f',
          fontFamily: 'Montserrat',
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
        backgroundColor: '#FFFFFF',
      },
    },
    MuiOutlinedInput: {
      root: {
        backgroundColor: '#FFFFFF',
        fontSize: '16px',
        lineHeight: '26px',
      },
      notchedOutline: {
        borderColor: '#FFFFFF',
        borderWidth: '1px !important',
      },
      input: {
        padding: '13px 16px',
      },
      multiline: {
        backgroundColor: '#FFF',
      },
    },
    MuiInputLabel: {
      root: {
        backgroundColor: 'yellow',
      },
    },
    MuiTextField: {
      root: {},
    },
    MuiButton: {
      root: {
        minWidth: '240px',
        textTransform: 'none',
        padding: '17px 48px',
        fontSize: '20px',
        lineHeight: '30px',
        fontWeight: 'normal',
        transition: 'transform .2s ease-in-out',
        borderRadius: '6px',
        '&:hover': {
          transform: 'translateY(-1px)',
        },
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
          backgroundColor: '#1B1F38',
        },
      },
      containedSecondary: {
        '&:hover': {
          backgroundColor: '#fff',
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
        width: '70%',
        padding: '0px 0 30px 0',
      },
      paperWidthSm: {
        maxWidth: '100%',
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
    fontFamily: 'Montserrat',
    body1: {
      fontSize: '14px',
      lineHeight: '20px',
      color: '#1d1d1f',
    },
    body2: {
      fontFamily: 'sans-serif',
      fontSize: '16px',
    },
  },
  shape: {
    borderRadius: '18px',
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
      variant: 'outlined',
      InputLabelProps: {
        shrink: true,
      },
      color: 'primary',
    },
    MuiPaper: {
      elevation: 0,
    },
    MuiCard: {
      elevation: 0,
    },
    MuiTabs: {
      disableRipple: false,
      disableFocusRipple: false,
    },
  },
})

export default theme
