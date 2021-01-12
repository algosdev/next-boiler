import { makeStyles } from '@material-ui/core/styles'
export const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,

    '& .MuiTypography-root': {
      fontFamily: 'Open Sans , sans-serif',
    },
    '& .MuiTabs-indicator': {
      height: 'calc(100% - 8px)',
      backgroundColor: 'var(--border-color)',
      borderRadius: '12px',
      top: '4px',
      zIndex: '1',
      bottom: '4px',
      ['@media (max-width:576px)']: {
        height: 'calc(100% - 4px)',
        borderRadius: '8px',
        top: '2px',
        bottom: '2px',
      },
    },
    '& .MuiAppBar-colorPrimary': {
      background: 'transparent',
    },
    '& .MuiBox-root': {
      padding: '10px 0',
    },
    '& .MuiAppBar-root': {
      display: 'inline-flex',
      boxShadow: 'none',
      height: 'auto',
    },
    '& .MuiTabScrollButton-root': {
      display: 'none',
    },
    '& .MuiTabs-flexContainer,  & .MuiTabs-scrollable': {
      width: '100%',
    },
    '& .MuiTabs-root': {
      backgroundColor: 'var(--secondary-color)',
      height: '48px',
      alignItems: 'center',
      background: 'rgba(255,255,255,0.1)',
      borderRadius: '12px',
      maxWidth: '100%',
      padding: '0 4px',
      width: '100%',
      minHeight: '32px',
      ['@media (max-width:576px)']: {
        height: '32px',
        borderRadius: '8px',
      },
    },
    '& .MuiTab-root': {
      textTransform: 'none',
      height: '40px',
      minHeight: '48px',
      fontFamily: "'Open Sans', sans-serif",
      fontWeight: '600',
      zIndex: '2',
      color: '#1d1d1d',
      opacity: '1',
      borderRadius: '12px',
      transition: '0.5s',
      fontSize: '16px',
      maxWidth: '100%',
      width: 'calc(100% / 3)',
      ['@media (max-width:576px)']: {
        height: '28px',
        margin: '2px',
        fontSize: '12px',
        borderRadius: '8px',
      },
    },
    '& .MuiTab-root.Mui-selected': {
      color: '#fff',
    },

    '& .MuiTouchRipple-root': {
      display: 'none',
    },
    '& .MuiCardActionArea-focusHighlight': {
      display: 'none',
    },
    '& .Mui-disabled': {
      color: 'rgba(255,255,255,0.5)',
    },
  },
  indicator: {
    color: 'yellow',
  },
}))
