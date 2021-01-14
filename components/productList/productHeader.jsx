import React, { useState } from 'react'
import style from './productList.module.scss'
import { Link, useTranslation } from '../../i18n'
import { List, KeyboardArrowDown } from '@material-ui/icons'
import { motion, AnimatePresence } from 'framer-motion'
import { ClickAwayListener, makeStyles } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import ListItemText from '@material-ui/core/ListItemText'
import ListItem from '@material-ui/core/ListItem'
// import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import CloseIcon from '@material-ui/icons/Close'
import Slide from '@material-ui/core/Slide'
const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}))
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />
})
function ProductHeader({ showFilter, setShowFilter }) {
  const { t } = useTranslation()
  const classes = useStyles()
  const sortByData = [
    t('sort_recommended'),
    t('sort_new'),
    t('sort_price_low'),
    t('sort_price_high'),
  ]
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  const [activeSortBy, setActiveSortBy] = useState(0)
  //   const [showFilter, setShowFilter] = useState(true)
  const [sortByOpen, setSortByOpen] = useState(false)
  return (
    <>
      <div className={style.navBar}>
        <div className={style.wrapper}>
          <div>
            <button
              className={style.btn}
              onClick={() => {
                handleClickOpen()
                setShowFilter(!showFilter)
              }}
            >
              <List />
              {t('filter')}
            </button>
          </div>

          <div className={style.sort_cont}>
            <button
              className={style.btn}
              onClick={() => setSortByOpen(!sortByOpen)}
            >
              <span>{t('sort_by')}: </span> {sortByData[activeSortBy]}
              <span
                className={`${style.arrow} ${sortByOpen ? style.open : ''}`}
              >
                <KeyboardArrowDown />
              </span>
            </button>
            <AnimatePresence>
              {sortByOpen ? (
                <ClickAwayListener onClickAway={() => setSortByOpen(false)}>
                  <motion.div
                    className={style.popup}
                    variants={{
                      visible: {
                        y: 0,
                        position: 'absolute',
                        x: '-50%',
                        opacity: 1,
                        top: '200%',
                        left: 'calc(50% - 13px)',
                      },
                      stable: {
                        position: 'absolute',
                        y: -20,
                        opacity: 0,
                        x: '-50%',
                        top: '200%',
                        left: 'calc(50% - 13px)',
                      },
                    }}
                    animate={'visible'}
                    initial={'stable'}
                    exit={'stable'}
                  >
                    <ul>
                      {sortByData.map((item, index) => (
                        <li key={index}>
                          <button
                            onClick={() => {
                              setActiveSortBy(index)
                              setSortByOpen(false)
                            }}
                            disabled={index === activeSortBy ? true : false}
                          >
                            {item}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </ClickAwayListener>
              ) : (
                ''
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge='start'
              color='inherit'
              onClick={handleClose}
              aria-label='close'
            >
              <CloseIcon />
            </IconButton>
            <Typography variant='h6' className={classes.title}>
              Фильтр
            </Typography>
            <Button autoFocus color='inherit' onClick={handleClose}>
              Применять
            </Button>
          </Toolbar>
        </AppBar>
        {/* <List>
          <ListItem button>
            <ListItemText primary='Phone ringtone' secondary='Titania' />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText
              primary='Default notification ringtone'
              secondary='Tethys'
            />
          </ListItem>
        </List> */}
      </Dialog>
    </>
  )
}

export default ProductHeader
