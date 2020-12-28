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
import { LocalMallOutlined } from '@material-ui/icons'
import Link from 'next/link'
import style from './header.module.scss'
const useStyles = makeStyles(() => ({
  paper: {
    borderRadius: '6px',
    borderTopLeftRadius: '0',
    borderTopRightRadius: '0',
    background: '#1d1d1d',
    color: '#fff',
    overflow: 'hidden',

    '& .MuiMenuItem-root': {
      padding: 0,
      minWidth: '200px',
    },
    '& .MuiMenuItem-root a': {
      color: '#fff',
      justifyContent: 'flex-start !important',
      padding: '6px 20px',
    },
    '& .MuiMenuItem-root p': {
      color: '#fff',
      padding: '50px',
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
const CartDropdown = ({ title, subCategs }) => {
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
        <LocalMallOutlined />

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
                    <div
                      className={style.cart_items}
                      onClick={handleClose}
                      diableRipple
                    >
                      <p>Your cart is empty</p>
                    </div>

                    <MenuItem onClick={handleClose} diableRipple>
                      <Link href='/cart'>
                        <a>Cart</a>
                      </Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose} diableRipple>
                      <Link href='/orders'>
                        <a>Orders</a>
                      </Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose} diableRipple>
                      <Link href='/account'>
                        <a>Account</a>
                      </Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose} diableRipple>
                      <Link href='/signIn'>
                        <a>Sign in</a>
                      </Link>
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

export default CartDropdown
