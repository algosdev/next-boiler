import React, { useState, useEffect } from 'react'
import { Link, useTranslation } from '../../i18n'
import style from './header.module.scss'
import { BrandLogo, CloseIcon } from '../svg'
import { LocalMallOutlined, SearchOutlined } from '@material-ui/icons'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import { motion, useAnimation, AnimatePresence } from 'framer-motion'
import MuiAccordion from '@material-ui/core/Accordion'
import MuiAccordionSummary from '@material-ui/core/AccordionSummary'
import MuiAccordionDetails from '@material-ui/core/AccordionDetails'
import Typography from '@material-ui/core/Typography'
import { ExpandMoreRounded } from '@material-ui/icons'
import { withStyles } from '@material-ui/core/styles'
import { ClickAwayListener } from '@material-ui/core'
import LanguageDropdown from './LanguageDropdown'
import CartDropdown from './CartDropdown'

const Accordion = withStyles({
  root: {
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: '0',
      width: '100%',
    },
    '&.Mui-expanded': {
      margin: '0',
    },
    background: '#2a2a2a',
    borderBottom: '1px solid #434343 !important',
  },
})(MuiAccordion)

const AccordionSummary = withStyles({
  root: {
    backgroundColor: 'transparent',
    marginBottom: -1,
    padding: '0',
    '&$expanded': {
      width: '100%',
      minHeight: 44,
    },
    '& .MuiTypography-root': {
      display: 'flex',
      color: '#fff',
      fontSize: '16px',
      alignItems: 'center',
    },
    '& .MuiIconButton-root': {
      color: '#fff',
    },
  },
  content: {
    '&$expanded': {
      margin: '0',
    },
  },
  expanded: {},
})(MuiAccordionSummary)

const AccordionDetails = withStyles((theme) => ({
  root: {
    display: 'flex',

    flexDirection: 'column',
    padding: '5px 0',
    '& .MuiTypography-root': {
      padding: '0',
      display: 'flex',
      color: '#fff',
      alignItems: 'center',
    },
    '& .MuiTypography-root a': {
      color: '#fff',
      padding: '5px 10px',
      width: '100%',
    },
  },
}))(MuiAccordionDetails)
function MobileHeader({ data }) {
  const { t } = useTranslation()
  const [expanded, setExpanded] = useState('panel')
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false)
  }
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
    return () => {
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
          {/* <Link href='/cart'>
            <a>
              <ShoppingCartOutlinedIcon />
            </a>
          </Link> */}
          <CartDropdown mobile={true} />
        </div>
        <LanguageDropdown />
        {/* <div className={style.cart_cont}>
          <Link href='/cart'>
            <a>
              <ShoppingCartOutlinedIcon />
            </a>
          </Link>
        </div> */}
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
                y: '-100%',
              },
            }}
            transition={{
              duration: 0.5,
              type: 'twin',
            }}
            animate={'open'}
            initial={'stable'}
            exit={'stable'}
          >
            <form className={`${style.searchForm}`} onSubmit={submitHandler}>
              <input type='text' placeholder={t('search')} />
              <button className={style.icon} type='submit'>
                <ArrowForwardIcon />
              </button>
            </form>
            {data.map((categ, index) => {
              return (
                <Accordion
                  square
                  key={index}
                  expanded={expanded === `panel${index}`}
                  onChange={handleChange(`panel${index}`)}
                >
                  <AccordionSummary
                    aria-controls='panel2d-content'
                    id='panel2d-header'
                    expandIcon={<ExpandMoreRounded />}
                  >
                    <Typography>{categ.title}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    {categ.subCategs.map((genre, ind) => (
                      <Typography key={ind} onClick={() => setIsOpen(false)}>
                        <Link href={`/shop?${genre.link}`}>
                          <a>{genre.title}</a>
                        </Link>
                      </Typography>
                    ))}
                  </AccordionDetails>
                </Accordion>
              )
            })}
            {/* {data.map((el, ind) => (
              <li key={ind} onClick={() => setIsOpen(false)}>
                <Link href='/shop'>
                  <a>{el.title}</a>
                </Link>
              </li>
            ))} */}
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
