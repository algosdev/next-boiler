import React, { useState, useEffect, useRef } from 'react'
import style from './header.module.scss'
import { Container, ClickAwayListener, makeStyles } from '@material-ui/core'
import { Link } from '../../i18n'
import CartDropdown from './CartDropdown'
import LanguageDropdown from './LanguageDropdown'
import { BrandLogo, CloseIcon, ProfileIcon } from '../svg'
import { SearchOutlined } from '@material-ui/icons'
import { motion, useAnimation, AnimatePresence } from 'framer-motion'
import NavItem from './navItem'
import { useTranslation } from '../../i18n'
import { LocalMallOutlined } from '@material-ui/icons'
import ProfileDropdown from './ProfileDropdown'
import MobileHeader from './mobileHeader'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import Slide from '@material-ui/core/Slide'

function HideOnScroll(props) {
  const { children, window } = props
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined })

  return (
    <Slide appear={false} direction='down' in={!trigger}>
      {children}
    </Slide>
  )
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
}
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

function Header(props) {
  const { t } = useTranslation()
  const [isMobile, setIsMobile] = useState(false)
  const classes = useStyles()
  const searchRef = useRef(null)
  const animationForm = useAnimation()
  const [isSearchVisible, setIsSearchVisible] = useState(false)

  const navData = [
    {
      title: t('apple_p'),
      subCategs: [
        { title: 'Iphone', link: 'category=apple_p&subcategory=Iphone' },
        { title: 'Ipad', link: 'category=apple_p&subcategory=Ipad' },
        {
          title: 'Apple watch',
          link: 'category=apple_p&subcategory=Apple_watch',
        },
        { title: 'AirPod', link: 'category=apple_p&subcategory=AirPod' },
        { title: 'Macbook', link: 'category=apple_p&subcategory=Macbook' },
        { title: 'iMac', link: 'category=apple_p&subcategory=iMac' },
      ],
    },
    {
      title: t('samsung_p'),
      subCategs: [
        {
          title: t('galaxy_phones'),
          link: 'category=samsung_p&subcategory=galaxy%phones',
        },
        { title: t('watches'), link: 'category=samsung_p&subcategory=watches' },
        { title: t('tablets'), link: 'category=samsung_p&subcategory=tablets' },
        { title: t('watches'), link: 'category=samsung_p&subcategory=watches' },
      ],
    },
    {
      title: t('acoustics'),
      subCategs: [
        {
          title: t('speakers'),
          link: 'category=acoustics&subcategory=speakers',
        },
        {
          title: t('earphones'),
          link: 'category=acoustics&subcategory=earphones',
        },
        {
          title: t('microphones'),
          link: 'category=acoustics&subcategory=microphones',
        },
      ],
    },
    {
      title: t('accessories'),
      subCategs: [
        { title: t('covers'), link: 'category=accessories&subcategory=covers' },
        {
          title: t('chargers'),
          link: 'category=accessories&subcategory=chargers',
        },
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
  useEffect(() => {
    if (window) {
      setIsMobile(window.innerWidth > 876 ? false : true)
      window.addEventListener('resize', () =>
        setIsMobile(window.innerWidth > 876 ? false : true)
      )
    }
    document.addEventListener(
      'keydown',
      (e) => {
        if (e.keyCode === 27) {
          setIsSearchVisible(false)
        }
      },
      false
    )

    return () => {
      window.removeEventListener('resize', () => {})
      document.removeEventListener('keydown', (e) => console.log(e), false)
    }
  }, [])
  return (
    <>
      {/* <HideOnScroll {...props}> */}
      <AppBar elevation={0}>
        <header className={style.header}>
          <Container>
            {!isMobile ? (
              <div className={style.wrapper}>
                <div className={style.brandLogo}>
                  <Link href='/'>
                    <a>
                      <BrandLogo />
                    </a>
                  </Link>
                </div>
                <div className={style.nav}>
                  <ul className={style.list}>
                    {navData.map((item, index) => (
                      <NavItem
                        key={index}
                        title={item.title}
                        subCategs={item.subCategs}
                      />
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
                              left: '0',
                              right: 'auto',
                              // x: '-100%',
                              top: '50%',
                              y: '-50%',
                              width: '100%',
                            },
                            stable: {
                              right: '50px',
                              left: 'auto',
                              // x: 0,
                              flip: true,
                              width: '0',
                              top: 0,
                              y: 0,
                            },
                          }}
                          transition={{
                            duration: 0.3,
                            type: 'twin',
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
                          <AnimatePresence>
                            {isSearchVisible ? (
                              <motion.div
                                className={style.closeSearch}
                                variants={{
                                  visible: {
                                    opacity: 1,
                                    transition: {
                                      delay: 0.3,
                                      duration: 0.4,
                                    },
                                  },
                                  stable: {
                                    opacity: 0,
                                    transition: {
                                      duration: 0.1,
                                    },
                                  },
                                }}
                                transition={{
                                  type: 'twin',
                                }}
                                animate={'visible'}
                                initial={'stable'}
                                exit={'stable'}
                                onClick={() => setIsSearchVisible(false)}
                              >
                                <CloseIcon />
                              </motion.div>
                            ) : (
                              ''
                            )}
                          </AnimatePresence>
                        </motion.form>
                      </ClickAwayListener>
                    </li>
                  </ul>
                  <ul className={style.icon_list}>
                    {/* <li className={`${style.listItem} ${style.cartIcon}`}>
                      <Link href='/cart'>
                        <a>
                          <LocalMallOutlined />
                        </a>
                      </Link>
                    </li> */}
                    <CartDropdown />
                    <ProfileDropdown />
                    <LanguageDropdown />
                  </ul>
                </div>
              </div>
            ) : (
              <MobileHeader data={navData} />
            )}
          </Container>
        </header>
      </AppBar>
      {/* </HideOnScroll> */}
    </>
  )
}
export default Header
