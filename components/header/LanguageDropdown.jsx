import React, { useEffect, useState, useRef } from 'react'
import {
  ClickAwayListener,
  Grow,
  Paper,
  Popper,
  MenuItem,
  MenuList,
  makeStyles,
} from '@material-ui/core'
import { i18n, useTranslation } from '../../i18n'
import style from './header.module.scss'
const useStyles = makeStyles(() => ({
  paper: {
    borderRadius: '6px',
    borderTopLeftRadius: '0',
    borderTopRightRadius: '0',
    background: '#1d1d1d',
    fontFamily:
      '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
    overflow: 'hidden',

    '& .MuiMenuItem-root': {
      color: '#fff',
      padding: '10px 20px',
      fontFamily:
        '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
    },

    '& .MuiList-root': {
      padding: '0',
    },
    '& .MuiListItem-root:hover': {
      background: 'rgba(255,255,255,0.2)',
    },
  },
  popper: {
    zIndex: '999',
    top: '10px !important',
  },
}))
const LanguageDropdown = ({ title, subCategs }) => {
  const { t } = useTranslation()
  const [isBagVisible, setIsBagVisible] = useState(false)
  const [activeLang, setActiveLang] = useState('')
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const anchorRef = useRef(null)

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen)
  }

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return
    }

    setOpen(false)
  }

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault()
      setOpen(false)
    }
  }

  const prevOpen = useRef(open)
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus()
    }

    prevOpen.current = open
  }, [open])
  useEffect(() => {
    if (i18n.language === 'ru') {
      setActiveLang('РУ')
    } else if (i18n.language === 'en') {
      setActiveLang('EN')
    } else if (i18n.language === 'uz') {
      setActiveLang("O'Z")
    }
  }, [i18n.language])

  return (
    <>
      <li
        className={style.listItem}
        ref={anchorRef}
        aria-controls={open ? 'menu-list-grow' : undefined}
        aria-haspopup='true'
        onClick={handleToggle}
      >
        {activeLang}
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          className={classes.popper}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom' ? 'center top' : 'center bottom',
              }}
            >
              <Paper className={classes.paper}>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id='menu-list-grow'
                    onKeyDown={handleListKeyDown}
                  >
                    {i18n.language !== 'ru' ? (
                      <MenuItem
                        onClick={(e) => {
                          handleClose(e)
                          i18n.changeLanguage('ru')
                        }}
                        diableRipple
                      >
                        РУ
                      </MenuItem>
                    ) : (
                      ''
                    )}
                    {i18n.language !== 'en' ? (
                      <MenuItem
                        onClick={(e) => {
                          handleClose(e)
                          i18n.changeLanguage('en')
                        }}
                        diableRipple
                      >
                        EN
                      </MenuItem>
                    ) : (
                      ''
                    )}
                    {i18n.language !== 'uz' ? (
                      <MenuItem
                        onClick={(e) => {
                          handleClose(e)
                          i18n.changeLanguage('uz')
                        }}
                        diableRipple
                      >
                        O'Z
                      </MenuItem>
                    ) : (
                      ''
                    )}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </li>
    </>
  )
}

export default LanguageDropdown
