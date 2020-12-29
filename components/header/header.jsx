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
import CartDropdown from './CartDropdown'
import LanguageDropdown from './LanguageDropdown'
import { BrandLogo } from '../svg'
import { SearchOutlined, LocalMallOutlined } from '@material-ui/icons'
import { motion, useAnimation, AnimatePresence } from 'framer-motion'
import NavItem from './navItem'
import { useTranslation } from '../../i18n'
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

function Header() {
  const { t } = useTranslation()
  const classes = useStyles()
  const searchRef = useRef(null)
  const animationForm = useAnimation()
  const [isSearchVisible, setIsSearchVisible] = useState(false)
  const navData = [
    {
      title: t('apple_p'),
      subCategs: [
        { title: 'Iphone', link: '/subcateg' },
        { title: 'Ipad', link: '/subcateg' },
        { title: 'Apple watch', link: '/subcateg' },
        { title: 'AirPod', link: '/subcateg' },
        { title: 'Macbook', link: '/subcateg' },
        { title: 'iMac', link: '/subcateg' },
      ],
    },
    {
      title: t('samsung_p'),
      subCategs: [
        { title: t('galaxy_phones'), link: '/subcateg' },
        { title: t('watches'), link: '/subcateg' },
        { title: t('tablets'), link: '/subcateg' },
        { title: t('buds'), link: '/subcateg' },
      ],
    },
    {
      title: t('acoustics'),
      subCategs: [
        { title: 'Колонки', link: '/subcateg' },
        { title: 'Наушники', link: '/subcateg' },
        { title: 'Микрофоны', link: '/subcateg' },
      ],
    },
    {
      title: t('accessories'),
      subCategs: [
        { title: 'Чехлы', link: '/subcateg' },
        { title: 'Зарядчики', link: '/subcateg' },
      ],
    },
  ]
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
                      duration: 0.3,
                      type: 'twin',
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
                      placeholder={t('search')}
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
              <CartDropdown />
              <LanguageDropdown />
            </ul>
          </div>
        </Container>
      </header>
    </>
  )
}
export default Header
