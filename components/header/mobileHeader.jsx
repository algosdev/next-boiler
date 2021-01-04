import React, { useState, useEffect } from 'react'
import { Link, useTranslation } from '../../i18n'
import style from './header.module.scss'
import { BrandLogo, CloseIcon } from '../svg'
import { LocalMallOutlined, SearchOutlined } from '@material-ui/icons'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import { motion, useAnimation, AnimatePresence } from 'framer-motion'
function MobileHeader({ data }) {
  const { t } = useTranslation()
  const animation = useAnimation()
  const [isOpen, setIsOpen] = useState(false)
  const submitHandler = (e) => {
    e.preventDefault()
  }
  useEffect(() => {
    if (isOpen) {
      animation.start('open')
      document.body.style.overflowY = 'hidden'
    } else {
      animation.start('stable')
      document.body.style.overflowY = 'scroll'
    }
  }, [isOpen])
  console.log(data)
  return (
    <>
      <div className={style.wrapper_mobile}>
        <div className={style.hamburger_cont}>
          <div className={style.inner} onClick={() => setIsOpen(!isOpen)}>
            <motion.div
              className={style.line}
              variants={{
                open: {
                  opacity: 1,
                  rotate: 45,
                  y: 7,
                },
                stable: {
                  opacity: 1,
                  rotate: 0,
                  y: 0,
                },
              }}
              transition={{
                duration: 0.3,
                type: 'twin',
              }}
              animate={animation}
              initial={'stable'}
            ></motion.div>
            <motion.div
              className={style.line}
              variants={{
                open: {
                  opacity: 0,
                  x: -30,
                },
                stable: {
                  opacity: 1,
                  x: 0,
                },
              }}
              transition={{
                duration: 0.3,
                type: 'twin',
              }}
              animate={animation}
              initial={'stable'}
            ></motion.div>
            <motion.div
              className={style.line}
              variants={{
                open: {
                  opacity: 1,
                  rotate: -45,
                  y: -7,
                },
                stable: {
                  opacity: 1,
                  rotate: 0,
                  y: 0,
                },
              }}
              transition={{
                duration: 0.3,
                type: 'twin',
              }}
              animate={animation}
              initial={'stable'}
            ></motion.div>
          </div>
        </div>
        <div className={style.logo_cont}>
          <Link href='/'>
            <a>
              <BrandLogo />
            </a>
          </Link>
        </div>
        <div className={style.cart_cont}>
          <Link href='/'>
            <a>
              <LocalMallOutlined />
            </a>
          </Link>
        </div>
      </div>
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            className={style.content}
            variants={{
              open: {
                opacity: 1,
                y: 0,
              },
              stable: {
                // opacity: 0,
                y: -600,
              },
            }}
            transition={{
              duration: 0.6,
              type: 'twin',
            }}
            animate={'open'}
            initial={'stable'}
            exit={'stable'}
          >
            <form className={`${style.searchForm}`} onSubmit={submitHandler}>
              {/* <div className={style.icon}>
                <SearchOutlined />
              </div> */}
              <input type='text' placeholder={t('search')} />
              <button className={style.icon} type='submit'>
                {/* <CloseIcon /> */}
                <ArrowForwardIcon />
              </button>
            </form>
            <ul>
              {data.map((el, ind) => (
                <li key={ind} onClick={() => setIsOpen(false)}>
                  <Link href='/shop'>
                    <a>{el.title}</a>
                  </Link>
                </li>
              ))}
            </ul>
            <ul>
              <li onClick={() => setIsOpen(false)}>
                <Link href='/orders'>
                  <a>{t('orders')}</a>
                </Link>
              </li>
              <li onClick={() => setIsOpen(false)}>
                <Link href='/account'>
                  <a>{t('profile')}</a>
                </Link>
              </li>
              <li onClick={() => setIsOpen(false)}>
                <Link href='/signin'>
                  <a>{t('signin')}</a>
                </Link>
              </li>
            </ul>
          </motion.div>
        ) : (
          ''
        )}
      </AnimatePresence>
    </>
  )
}

export default MobileHeader
