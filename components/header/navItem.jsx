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
import style from './header.module.scss'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { Link } from '../../i18n'
const useStyles = makeStyles(() => ({
  paper: {
    borderRadius: '6px',
    borderTopLeftRadius: '0',
    borderTopRightRadius: '0',
    background: '#1d1d1d',
    overflow: 'hidden',
    '& .MuiMenuItem-root': {
      padding: 0,
    },
    '& .MuiMenuItem-root a': {
      color: '#fff',
      margin: '6px 20px',
      minWidth: '100px',
      justifyContent: 'flex-start !important',
    },
    '& .MuiMenuItem-root a:hover': {
      textDecoration: 'none',
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
    paddingTop: '10px',
    top: '0 !important',
  },
}))
const NavItem = ({ title, subCategs }) => {
  NavItem.muiName = Popper.muiName
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
    <li
      className={style.listItem}
      ref={anchorRef}
      aria-controls={open ? 'menu-list-grow' : undefined}
      aria-haspopup='true'
      // onClick={handleToggle}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <span className={open ? style.open : ''}>
        {title} <ExpandMoreIcon />
      </span>
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
                  {subCategs?.map((item, index) => (
                    <MenuItem key={index} onClick={handleClose} diableRipple>
                      <Link href={`/shop?${item.link}`}>
                        <a>{item.title}</a>
                      </Link>
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </li>
  )
}

export default NavItem
