import React, { useState, useEffect, useRef } from 'react'
import style from './header.module.scss'
import {
  Container,
  ClickAwayListener,
  FormControl,
  MenuItem,
  Select,
  makeStyles,
} from '@material-ui/core'
import Link from 'next/link'
import { BrandLogo } from '../svg'
import { SearchOutlined, LocalMallOutlined } from '@material-ui/icons'
import { motion, useAnimation, AnimatePresence } from 'framer-motion'
import NavItem from './navItem'
const useStyles = makeStyles(() => ({
  select: {
    '& .MuiInput-root::before': {
      display: 'none',
    },
    '& .MuiInput-underline:after': {
      border: '0',
    },
    '& .MuiInput-underline:before': {
      border: '0',
    },
    '& .Mui-focused': {
      background: 'transparent',
    },
  },
}))
const navData = [
  {
    title: 'Apple products',
    subCategs: [
      { title: 'Mac1', link: '/subcateg' },
      { title: 'Watch', link: '/subcateg' },
      { title: 'Ipad', link: '/subcateg' },
    ],
  },
  {
    title: ' Samsung products',
    subCategs: [
      { title: 'Mac2', link: '/subcateg' },
      { title: 'Watch', link: '/subcateg' },
      { title: 'Ipad', link: '/subcateg' },
    ],
  },
  {
    title: 'Acoustics',
    subCategs: [
      { title: 'Mac3', link: '/subcateg' },
      { title: 'Watch', link: '/subcateg' },
      { title: 'Ipad', link: '/subcateg' },
    ],
  },
  {
    title: 'Accessories',
    subCategs: [
      { title: 'Mac4', link: '/subcateg' },
      { title: 'Watch', link: '/subcateg' },
      { title: 'Ipad', link: '/subcateg' },
    ],
  },
]
export default function Header() {
  const classes = useStyles()
  const searchRef = useRef(null)
  const animationForm = useAnimation()
  const [lang, setLang] = useState('ru')
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

  useEffect(() => {
    if (searchRef.current) {
      if (isSearchVisible) {
        searchRef.current.focus()
      } else {
        searchRef.current.blur()
      }
    }
  }, [isSearchVisible])
  return (
    <>
      <div className={style.topBar}>
        <Container>
          <div className={style.wrapper}>
            <ul className={style.list}>
              <li className={style.listItem}>
                <Link href='/'>
                  <a>Shops</a>
                </Link>
              </li>
              <li className={style.listItem}>
                <Link href='/'>
                  <a>Shipmnet</a>
                </Link>
              </li>
              <li className={style.listItem}>
                <Link href='/'>
                  <a>Blog</a>
                </Link>
              </li>
            </ul>
            <ul className={style.list}>
              <li className={style.listItem}>
                <FormControl className={classes.select}>
                  <Select
                    labelId='demo-simple-select-label'
                    id='demo-simple-select'
                    value={lang}
                    onChange={(e) => setLang(e.target.value)}
                  >
                    <MenuItem value={'ru'}>Russian</MenuItem>
                    <MenuItem value={'en'}>English</MenuItem>
                    <MenuItem value={'uz'}>Uzbek</MenuItem>
                  </Select>
                </FormControl>
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
              {navData.map((item, index) => (
                <li className={style.listItem} key={index}>
                  <NavItem title={item.title} subCategs={item.subCategs} />
                </li>
              ))}

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
                      ref={searchRef}
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

                    <AnimatePresence>
                      {isBagVisible ? (
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
                          transition={{ duration: 0.3 }}
                          animate={'visible'}
                          initial={'stable'}
                          exit={'stable'}
                        >
                          <p>Your cart is empty</p>
                          <ul>
                            <li>
                              <Link href='/cart'>
                                <a>Cart</a>
                              </Link>
                            </li>
                            <li>
                              <Link href='/orders'>
                                <a>Orders</a>
                              </Link>
                            </li>
                            <li>
                              <Link href='/account'>
                                <a>Account</a>
                              </Link>
                            </li>
                            <li>
                              <Link href='/signIn'>
                                <a>Sign in</a>
                              </Link>
                            </li>
                          </ul>
                        </motion.div>
                      ) : (
                        ''
                      )}
                    </AnimatePresence>
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
