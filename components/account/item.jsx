import React, { useState } from 'react'
import style from './account.module.scss'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
  Button,
  Slide,
} from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />
})
function Item({ title, details }) {
  const [open, setOpen] = useState(false)
  const [itemDetails, setItemDetails] = useState(details)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  return (
    <div className={style.wrapper_single_item}>
      <div className={style.sub_title}>{title}</div>
      <div className={style.leading}>{details}</div>
    </div>
  )
}

export default Item
