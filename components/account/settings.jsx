import React, { useState } from 'react'
import Shipment from './shipment'
import Payment from './payment'
import style from './account.module.scss'
import EditIcon from '@material-ui/icons/Edit'
import Item from './item'
import {
  Dialog,
  DialogContent,
  DialogActions,
  DialogContentText,
  Button,
  Slide,
  Container,
} from '@material-ui/core'
import { useTranslation } from '../../i18n'
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />
})
function AccountSettings() {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)
  const [data, setData] = useState({
    firstname: 'Samandar',
    lastname: 'Toshkuvvatov',
    phone_num: '+998916545454',
    address: "45, Istiqbol ko'chasi, Mirobod tumani, Toshkent",
  })
  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  return (
    <div style={{ background: '#fff', padding: '50px 0' }}>
      <Container>
        <div className={style.title}>
          <span>{t('account_settings')}</span>
          <div className={style.icon} onClick={handleClickOpen}>
            <EditIcon />
            {t('edit')}
          </div>
        </div>
        <div className={style.wrapper_item}>
          <div className={style.grid}>
            <div className={style.column}>
              <Item title={t('name')} details={data.firstname} />
            </div>
            <div className={style.column}>
              <Item title={t('surname')} details={data.lastname} />
            </div>
            <div className={style.column}>
              <Item title={t('phone_num')} details={data.phone_num} />
            </div>
            <div className={style.column}>
              <Item title={t('shipping_address')} details={data.address} />
            </div>
          </div>
        </div>
      </Container>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby='alert-dialog-slide-title'
        aria-describedby='alert-dialog-slide-description'
      >
        <div className={style.dialog_title}>{t('edit_as_title')}</div>
        <DialogContent>
          <DialogContentText>{t('edit_desc')}</DialogContentText>
          <input
            type='text'
            className='input margin'
            onChange={(e) => setData({ ...data, firstname: e.target.value })}
            value={data.firstname}
            placeholder={t('name')}
          />
          <input
            type='text'
            className='input margin'
            onChange={(e) => setData({ ...data, lastname: e.target.value })}
            value={data.lastname}
            placeholder={t('surname')}
          />
          <input
            type='text'
            className='input margin'
            onChange={(e) => setData({ ...data, phone_num: e.target.value })}
            value={data.phone_num}
            placeholder={t('phone_num')}
          />
          <input
            type='text'
            className='input margin'
            onChange={(e) => setData({ ...data, address: e.target.value })}
            value={data.address}
            placeholder={t('shipping_address')}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            variant='containedSecondary'
            color='primary'
          >
            {t('cancel')}
          </Button>
          <Button onClick={handleClose} color='primary'>
            {t('save')}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default AccountSettings
