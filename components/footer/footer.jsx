import { Container, Grid, Typography } from '@material-ui/core';
import React from 'react';
import style from './footer.module.scss';
import { Link } from '../../i18n';
import { Facebook, Instagram, Telegram, YouTube } from '@material-ui/icons';
import { useTranslation } from '../../i18n';
export default function Footer() {
  const { t } = useTranslation();
  return (
    <div className={style.footer}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={3} md={3} sm={6} xs={6}>
            <Typography variant='h6'>{t('buy_and_learn')}</Typography>
            <ul className={style.list}>
              <li className={style.listItem}>
                <Link href='/shop/iphone12-case'>
                  <a>Mac</a>
                </Link>
              </li>
              <li className={style.listItem}>
                <Link href='/shop/iphone12-case'>
                  <a>iPad</a>
                </Link>
              </li>
              <li className={style.listItem}>
                <Link href='/shop/iphone12-case'>
                  <a>iPhone</a>
                </Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={3} md={3} sm={6} xs={6}>
            <Typography variant='h6'>{t('company')}</Typography>
            <ul className={style.list}>
              <li className={style.listItem}>
                <Link href='/news'>
                  <a>{t('news')}</a>
                </Link>
              </li>
              <li className={style.listItem}>
                <Link href='/about'>
                  <a>{t('about_company')}</a>
                </Link>
              </li>
              <li className={style.listItem}>
                <Link href='/shop-addresses'>
                  <a>{t('address_of_shops')}</a>
                </Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={3} md={3} sm={6} xs={6}>
            <Typography variant='h6'>{t('information')}</Typography>
            <ul className={style.list}>
              <li className={style.listItem}>
                <Link href='/installment'>
                  <a>{t('installment')}</a>
                </Link>
              </li>
              <li className={style.listItem}>
                <Link href='/delivery'>
                  <a>{t('delivery')}</a>
                </Link>
              </li>
              <li className={style.listItem}>
                <Link href='/contact'>
                  <a>{t('contacts')}</a>
                  {/* <a>{t('bonuses')}</a> */}
                </Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={3} md={3} sm={6} xs={6}>
            <Typography variant='h6'>{t('contact_us')}</Typography>
            <ul className={style.social}>
              <li className={style.socialItem}>
                <a href='/' aria-label='Facebook'>
                  <Facebook />
                </a>
              </li>
              <li className={style.socialItem}>
                <a href='/' aria-label='Instagram'>
                  <Instagram />
                </a>
              </li>
              <li className={style.socialItem}>
                <a href='/' aria-label='Telegram'>
                  <Telegram />
                </a>
              </li>
              <li className={style.socialItem}>
                <a href='/' aria-label='YouTube'>
                  <YouTube />
                </a>
              </li>
            </ul>
          </Grid>
        </Grid>
        <div className={style.copyright}>
          <p>{t('copyright_txt')}</p>
          <p>
            Created by{' '}
            <a
              href='https://udevs.io'
              target='_blank'
              aria-label='Udevs'
              rel='noreferrer noopener'
            >
              Udevs
            </a>
          </p>
        </div>
      </Container>
    </div>
  );
}
