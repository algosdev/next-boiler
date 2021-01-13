import { makeStyles } from '@material-ui/core'
export const useStyles = makeStyles(() => ({
  root: {
    background: 'transparent',
    '& .MuiInputLabel-root': {
      background: 'transparent',
    },
    '& .MuiFilledInput-underline:hover:before, & .MuiFilledInput-underline:hover:after, & .MuiFilledInput-underline:hover:after,  & .MuiFilledInput-underline:after,  & .MuiFilledInput-underline:before': {
      display: 'none',
    },
    '& .MuiFilledInput-root': {
      border: '1px solid var(--border)',
      borderRadius: '10px',
    },
    '& .MuiFormLabel-root.Mui-focused': {
      color: 'var(--primary-color)',
    },

    '& .MuiFilledInput-root.Mui-focused': {
      background: '#fff',
      border: '1px solid var(--primary-color)',
    },
    '& .MuiFormLabel-root': {
      display: 'flex',
      flexDirection: 'row-reverse',
    },
  },
}))
