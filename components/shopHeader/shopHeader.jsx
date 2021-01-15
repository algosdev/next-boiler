import { Container, ClickAwayListener } from '@material-ui/core'
import React, { useState } from 'react'
import style from './shopHeader.module.scss'
import { useTranslation, Link, Router } from '../../i18n'
import { useRouter } from 'next/router'
import { KeyboardArrowDown } from '@material-ui/icons'
import { motion, AnimatePresence } from 'framer-motion'

export default function ShopHeader() {
  const router = useRouter()
  const { t } = useTranslation()
  const [sortByOpen, setSortByOpen] = useState(false)
  const [activeSubCateg, setActiveSubCateg] = useState('')
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
          link: 'category=samsung_p&subcategory=galaxy@phones',
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
  return (
    <div className={style.shopHeader}>
      <div className={style.top_header}>
        <Container className={style.content}>
          <div className={style.categ}>{t(router.query.category)}</div>
          <div className={style.dropdown}>
            <button
              className={style.btn}
              onClick={() => setSortByOpen(!sortByOpen)}
            >
              <span>{t('browse_all')}</span>
              <span
                className={`${style.arrow} ${sortByOpen ? style.open : ''}`}
              >
                <KeyboardArrowDown />
              </span>
            </button>
            <AnimatePresence>
              {sortByOpen ? (
                <ClickAwayListener onClickAway={() => setSortByOpen(false)}>
                  <motion.div
                    className={style.popup}
                    variants={{
                      visible: {
                        y: 0,
                        position: 'absolute',
                        x: '0',
                        opacity: 1,
                        top: '150%',
                        right: '0',
                      },
                      stable: {
                        position: 'absolute',
                        y: -20,
                        opacity: 0,
                        x: '0',
                        top: '150%',
                        right: '0',
                      },
                    }}
                    animate={'visible'}
                    initial={'stable'}
                    exit={'stable'}
                  >
                    <ul>
                      {navData
                        .filter(
                          (el) => el.title === t(router.query.category)
                        )?.[0]
                        ?.subCategs.map((item, index) => (
                          <li key={index}>
                            <button
                              onClick={() => {
                                setActiveSubCateg(index)
                                Router.push(`/shop?${item.link}`)
                                setSortByOpen(false)
                              }}
                              disabled={index === activeSubCateg ? true : false}
                            >
                              {item.title}
                            </button>
                          </li>
                        ))}
                    </ul>
                  </motion.div>
                </ClickAwayListener>
              ) : (
                ''
              )}
            </AnimatePresence>
          </div>
        </Container>
      </div>
      <Container>
        <div className={style.wrapper}>
          <h1 className={style.title}>
            {t(router.query.subcategory?.replace('_', '').replace('@', '_'))}
          </h1>
        </div>
      </Container>
    </div>
  )
}
