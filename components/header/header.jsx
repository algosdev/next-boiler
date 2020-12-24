import React, { useState, useEffect, useRef } from 'react'
import style from './header.module.scss'
import { Container } from '@material-ui/core'
import Link from 'next/link'
import { BrandLogo } from '../svg'
import { SearchOutlined, LocalMallOutlined } from '@material-ui/icons'
import { motion, useAnimation, AnimatePresence } from 'framer-motion'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import Grow from '@material-ui/core/Grow'
import Paper from '@material-ui/core/Paper'
import Popper from '@material-ui/core/Popper'
import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  paper: {
    borderRadius: '6px',
  },
}))
export default function Header() {
  const animationForm = useAnimation()
  const animationBag = useAnimation()
  const [isSearchVisible, setIsSearchVisible] = useState(false)
  const [isBagVisible, setIsBagVisible] = useState(false)
  const submitHandler = (e) => {
    e.preventDefault()
  }
  useEffect(() => {
    if (isSearchVisible) {
      animationForm.start('visible')
    } else {
      animationForm.start('stable')
    }
  }, [isSearchVisible])
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
      <div className={style.topBar}>
        <Container>
          <div className={style.wrapper}>
            <ul className={style.list}>
              <li className={style.listItem}>
                <Link href='/'>
                  <a>Магазины</a>
                </Link>
              </li>
              <li className={style.listItem}>
                <Link href='/'>
                  <a>Доставка</a>
                </Link>
              </li>
              <li className={style.listItem}>
                <Link href='/'>
                  <a>Блог</a>
                </Link>
              </li>
            </ul>
            <ul className={style.list}>
              <li className={style.listItem}>
                <Link href='/'>
                  <a>Русский</a>
                </Link>
              </li>
            </ul>
          </div>
        </Container>
      </div>
      <header className={style.header}>
        <Container>
          <div className={style.wrapper}>
            <div className={style.brandLogo}>
              <Link href='/'>
                <a>
                  <BrandLogo />
                </a>
              </Link>
            </div>
            <ul className={style.list}>
              <li className={style.listItem}>
                <span
                  ref={anchorRef}
                  aria-controls={open ? 'menu-list-grow' : undefined}
                  aria-haspopup='true'
                  onClick={handleToggle}
                >
                  Apple products
                </span>
                <Popper
                  open={open}
                  anchorEl={anchorRef.current}
                  role={undefined}
                  transition
                  disablePortal
                >
                  {({ TransitionProps, placement }) => (
                    <Grow
                      {...TransitionProps}
                      style={{
                        transformOrigin:
                          placement === 'bottom'
                            ? 'center top'
                            : 'center bottom',
                      }}
                    >
                      <Paper className={classes.paper}>
                        <ClickAwayListener onClickAway={handleClose}>
                          <MenuList
                            autoFocusItem={open}
                            id='menu-list-grow'
                            onKeyDown={handleListKeyDown}
                          >
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>
                              My account
                            </MenuItem>
                            <MenuItem onClick={handleClose}>Logout</MenuItem>
                          </MenuList>
                        </ClickAwayListener>
                      </Paper>
                    </Grow>
                  )}
                </Popper>
              </li>
              <li className={style.listItem}>
                <span
                  ref={anchorRef}
                  aria-controls={open ? 'menu-list-grow' : undefined}
                  aria-haspopup='true'
                  onClick={handleToggle}
                >
                  Samsung products
                </span>
                <Popper
                  open={open}
                  anchorEl={anchorRef.current}
                  role={undefined}
                  transition
                  disablePortal
                >
                  {({ TransitionProps, placement }) => (
                    <Grow
                      {...TransitionProps}
                      style={{
                        transformOrigin:
                          placement === 'bottom'
                            ? 'center top'
                            : 'center bottom',
                      }}
                    >
                      <Paper className={classes.paper}>
                        <ClickAwayListener onClickAway={handleClose}>
                          <MenuList
                            autoFocusItem={open}
                            id='menu-list-grow'
                            onKeyDown={handleListKeyDown}
                          >
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}></MenuItem>
                            <MenuItem onClick={handleClose}>Logout</MenuItem>
                          </MenuList>
                        </ClickAwayListener>
                      </Paper>
                    </Grow>
                  )}
                </Popper>
              </li>

              <li className={style.listItem}>
                <span
                  ref={anchorRef}
                  aria-controls={open ? 'menu-list-grow' : undefined}
                  aria-haspopup='true'
                  onClick={handleToggle}
                >
                  Acoustics
                </span>
                <Popper
                  open={open}
                  anchorEl={anchorRef.current}
                  role={undefined}
                  transition
                  disablePortal
                >
                  {({ TransitionProps, placement }) => (
                    <Grow
                      {...TransitionProps}
                      style={{
                        transformOrigin:
                          placement === 'bottom'
                            ? 'center top'
                            : 'center bottom',
                      }}
                    >
                      <Paper className={classes.paper}>
                        <ClickAwayListener onClickAway={handleClose}>
                          <MenuList
                            autoFocusItem={open}
                            id='menu-list-grow'
                            onKeyDown={handleListKeyDown}
                          >
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>Acoustics</MenuItem>
                            <MenuItem onClick={handleClose}>Logout</MenuItem>
                          </MenuList>
                        </ClickAwayListener>
                      </Paper>
                    </Grow>
                  )}
                </Popper>
              </li>

              <li className={style.listItem}>
                <span
                  ref={anchorRef}
                  aria-controls={open ? 'menu-list-grow' : undefined}
                  aria-haspopup='true'
                  onClick={handleToggle}
                >
                  Accessories
                </span>
                <Popper
                  open={open}
                  anchorEl={anchorRef.current}
                  role={undefined}
                  transition
                  disablePortal
                >
                  {({ TransitionProps, placement }) => (
                    <Grow
                      {...TransitionProps}
                      style={{
                        transformOrigin:
                          placement === 'bottom'
                            ? 'center top'
                            : 'center bottom',
                      }}
                    >
                      <Paper className={classes.paper}>
                        <ClickAwayListener onClickAway={handleClose}>
                          <MenuList
                            autoFocusItem={open}
                            id='menu-list-grow'
                            onKeyDown={handleListKeyDown}
                          >
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>
                              Accessories
                            </MenuItem>
                            <MenuItem onClick={handleClose}>Logout</MenuItem>
                          </MenuList>
                        </ClickAwayListener>
                      </Paper>
                    </Grow>
                  )}
                </Popper>
              </li>

              <li className={style.listItem}>
                <ClickAwayListener
                  onClickAway={() => setIsSearchVisible(false)}
                >
                  <motion.form
                    className={`${style.searchForm} ${
                      isSearchVisible ? style.animate : ''
                    }`}
                    variants={{
                      visible: {
                        x: -750,
                        top: '50%',
                        y: '-50%',
                        width: '100%',
                      },
                      stable: {
                        x: 0,
                        width: '0',
                        top: 0,
                        y: 0,
                      },
                    }}
                    transition={{
                      type: isSearchVisible ? 'spring' : 'twin',
                      stiffness: 100,
                    }}
                    animate={animationForm}
                    initial={'stable'}
                    exit={'stable'}
                    onSubmit={submitHandler}
                  >
                    <div
                      className={style.icon}
                      onClick={() => setIsSearchVisible(!isSearchVisible)}
                    >
                      <SearchOutlined />
                    </div>
                    <motion.input
                      type='text'
                      placeholder='Search'
                      transition={{
                        duration: 0,
                      }}
                      variants={{
                        visible: {
                          width: '100%',
                          opacity: 1,
                        },
                        stable: {
                          width: '0',
                          opacity: 0,
                        },
                      }}
                      animate={animationForm}
                      initial={'stable'}
                      exit={'stable'}
                    />
                  </motion.form>
                </ClickAwayListener>
              </li>
              <ClickAwayListener onClickAway={() => setIsBagVisible(false)}>
                <li className={style.listItem}>
                  <div
                    className={style.icon}
                    onClick={() => setIsBagVisible(!isBagVisible)}
                  >
                    <LocalMallOutlined />
                    {isBagVisible ? (
                      <AnimatePresence>
                        <motion.div
                          className={style.popup}
                          variants={{
                            visible: {
                              y: 0,
                              opacity: 1,
                            },
                            stable: {
                              y: -20,
                              x: '-50%',
                              opacity: 0,
                              left: '50%',
                            },
                          }}
                          animate={'visible'}
                          initial={'stable'}
                          exit={'stable'}
                        >
                          <p>Your bag is empty</p>
                          <ul>
                            <li>Bag</li>
                            <li>Favourites</li>
                            <li>Orders</li>
                            <li>Account</li>
                            <li>Sign in</li>
                          </ul>
                        </motion.div>
                      </AnimatePresence>
                    ) : (
                      ''
                    )}
                  </div>
                </li>
              </ClickAwayListener>
            </ul>
          </div>
        </Container>
      </header>
    </>
  )
}
