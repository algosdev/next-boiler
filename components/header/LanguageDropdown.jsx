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
import { i18n } from '../../i18n'
import style from './header.module.scss'
const useStyles = makeStyles(() => ({
  paper: {
    borderRadius: '6px',
    borderTopLeftRadius: '0',
    borderTopRightRadius: '0',
    background: '#1d1d1d',

    overflow: 'hidden',

    '& .MuiMenuItem-root': {
      padding: 0,
      color: '#fff',
      padding: '10px 20px',
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
  const [isBagVisible, setIsBagVisible] = useState(false)
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

  return (
    <>
      <li
        className={style.listItem}
        ref={anchorRef}
        aria-controls={open ? 'menu-list-grow' : undefined}
        aria-haspopup='true'
        onClick={handleToggle}
      >
        RU
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
                    <MenuItem
                      onClick={(e) => {
                        handleClose(e)
                        i18n.changeLanguage('ru')
                      }}
                      diableRipple
                    >
                      RU
                    </MenuItem>
                    <MenuItem
                      onClick={(e) => {
                        handleClose(e)
                        i18n.changeLanguage('en')
                      }}
                      diableRipple
                    >
                      EN
                    </MenuItem>
                    <MenuItem
                      onClick={(e) => {
                        handleClose(e)
                        i18n.changeLanguage('uz')
                      }}
                      diableRipple
                    >
                      UZ
                    </MenuItem>
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
