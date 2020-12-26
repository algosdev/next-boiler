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
    <>
      <div className={style.sub_title}>{title}</div>
      <div className={style.leading}>{itemDetails}</div>
      <div className={style.icon} onClick={handleClickOpen}>
        <EditIcon />
      </div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby='alert-dialog-slide-title'
        aria-describedby='alert-dialog-slide-description'
      >
        <div className={style.dialog_title}>Edit your {title}</div>
        <DialogContent>
          <DialogContentText>
            Changes to this information will apply to your MACBRO account and
            will affect your future purchases.
          </DialogContentText>
          <input
            type='text'
            className='input'
            onChange={(e) => setItemDetails(e.target.value)}
            value={itemDetails}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            variant='containedSecondary'
            color='primary'
          >
            Cancel
          </Button>
          <Button onClick={handleClose} color='primary'>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default Item
