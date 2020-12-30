import { Container, Grid, Typography } from '@material-ui/core'
import React from 'react'
import style from './footer.module.scss'
import Link from 'next/link'
import { Facebook, Instagram, Telegram, YouTube } from '@material-ui/icons'
import { useTranslation } from '../../i18n'
export default function Footer() {
  const { t } = useTranslation()
  return (
    <div className={style.footer}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Typography variant='h6'>{t('buy_and_learn')}</Typography>
            <ul className={style.list}>
              <li className={style.listItem}>
                <Link href='/'>
                  <a>Mac</a>
                </Link>
              </li>
              <li className={style.listItem}>
                <Link href='/'>
                  <a>iPad</a>
                </Link>
              </li>
              <li className={style.listItem}>
                <Link href='/'>
                  <a>iPhone</a>
                </Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={3}>
            <Typography variant='h6'>{t('company')}</Typography>
            <ul className={style.list}>
              <li className={style.listItem}>
                <Link href='/'>
                  <a>{t('news')}</a>
                </Link>
              </li>
              <li className={style.listItem}>
                <Link href='/'>
                  <a>{t('about_company')}</a>
                </Link>
              </li>
              <li className={style.listItem}>
                <Link href='/'>
                  <a>{t('address_of_shops')}</a>
                </Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={3}>
            <Typography variant='h6'>{t('information')}</Typography>
            <ul className={style.list}>
              <li className={style.listItem}>
                <Link href='/'>
                  <a>{t('installment')}</a>
                </Link>
              </li>
              <li className={style.listItem}>
                <Link href='/'>
                  <a>{t('delivery')}</a>
                </Link>
              </li>
              <li className={style.listItem}>
                <Link href='/'>
                  <a>{t('bonuses')}</a>
                </Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={3}>
            <Typography variant='h6'>{t('contact_us')}</Typography>
            <ul className={style.social}>
              <li className={style.socialItem}>
                <a href='/'>
                  <Facebook />
                </a>
              </li>
              <li className={style.socialItem}>
                <a href='/'>
                  <Instagram />
                </a>
              </li>
              <li className={style.socialItem}>
                <a href='/'>
                  <Telegram />
                </a>
              </li>
              <li className={style.socialItem}>
                <a href='/'>
                  <YouTube />
                </a>
              </li>
            </ul>
          </Grid>
        </Grid>
        <div className='copyright'>
          <p>{t('copyright_txt')}</p>
          <p>
            Created by{' '}
            <a
              href='https://udevs.io'
              target='_blank'
              rel='noreferrer noopener'
            >
              Udevs
            </a>
          </p>
        </div>
      </Container>
    </div>
  )
}
