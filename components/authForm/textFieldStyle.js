import { makeStyles } from '@material-ui/core'
import MaskedInput from 'react-text-mask'
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
export function PhoneNumberMask(props) {
  const { inputRef, ...other } = props

  return (
    <MaskedInput
      {...other}
      ref={(ref) => {
        inputRef(ref ? ref.inputElement : null)
      }}
      mask={[
        '+',
        '9',
        '9',
        '8',
        ' ',
        /\d/,
        /\d/,
        ' ',
        ' ',
        /\d/,
        /\d/,
        /\d/,
        ' ',
        /\d/,
        /\d/,
        ' ',
        /\d/,
        /\d/,
      ]}
      // placeholderChar={'\u2000'}
      showMask
    />
  )
}
