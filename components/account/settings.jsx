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
import { useTranslation, Router } from '../../i18n'
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
    address1: "45, Istiqbol ko'chasi, Mirobod tumani, Toshkent",
    address2: '',
    address3: '',
  })
  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  return (
    <>
      <Container>
        <div className={style.wrapper_content}>
          <div className={style.title}>
            <span>{t('account_settings')}</span>
            <div className={style.actions}>
              <Button className={style.edit} onClick={handleClickOpen}>
                {t('edit')}
              </Button>
              <Button className={style.logout} onClick={() => Router.push('/')}>
                {t('signout')}
              </Button>
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
                <div className={style.wrapper_single_item}>
                  <div className={style.sub_title}>{t('shipping_address')}</div>
                  <div className={style.leading}>
                    {[data.address1, data.address2, data.address3].map((el) => (
                      <p>{el}</p>
                    ))}
                  </div>
                </div>
                {/* <Item title={t('shipping_address')} details={data.address1} /> */}
              </div>
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
          <form>
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
              onChange={(e) => setData({ ...data, address1: e.target.value })}
              value={data.address1}
              placeholder={`${t('shipping_address')} 1`}
            />
            <input
              type='text'
              className='input margin'
              onChange={(e) => setData({ ...data, address2: e.target.value })}
              value={data.address2}
              placeholder={`${t('shipping_address')} 2`}
            />
            <input
              type='text'
              className='input margin'
              onChange={(e) => setData({ ...data, address3: e.target.value })}
              value={data.address3}
              placeholder={`${t('shipping_address')} 3`}
            />
          </form>
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
        </DialogContent>
      </Dialog>
    </>
  )
}

export default AccountSettings
