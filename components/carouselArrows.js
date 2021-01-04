import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded'
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded'

export function NextArrow(props) {
  const { className, onClick } = props
  return (
    <button
      className={`slider_custom_arrow slider_next ${className}`}
      onClick={onClick}
      aria-label='next'
    >
      <ArrowForwardIosRoundedIcon />
    </button>
  )
}

export function PrevArrow(props) {
  const { className, onClick } = props
  return (
    <button
      className={`slider_custom_arrow slider_prev ${className}`}
      onClick={onClick}
      aria-label='prev'
    >
      <ArrowBackIosRoundedIcon />
    </button>
  )
}
