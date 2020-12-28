import { Container, Grid, Typography } from '@material-ui/core'
import React from 'react'
import style from './footer.module.scss'
import Link from 'next/link'
import { Facebook, Instagram, Telegram, YouTube } from '@material-ui/icons'

export default function Footer() {
  return (
    <div className={style.footer}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Typography variant='h6'>Shop and Learn</Typography>
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
            <Typography variant='h6'>Компания</Typography>
            <ul className={style.list}>
              <li className={style.listItem}>
                <Link href='/'>
                  <a>Новости</a>
                </Link>
              </li>
              <li className={style.listItem}>
                <Link href='/'>
                  <a>О компании</a>
                </Link>
              </li>
              <li className={style.listItem}>
                <Link href='/'>
                  <a>Адреса магазинов</a>
                </Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={3}>
            <Typography variant='h6'>Информация</Typography>
            <ul className={style.list}>
              <li className={style.listItem}>
                <Link href='/'>
                  <a>Рассрочка</a>
                </Link>
              </li>
              <li className={style.listItem}>
                <Link href='/'>
                  <a>Доставка</a>
                </Link>
              </li>
              <li className={style.listItem}>
                <Link href='/'>
                  <a>Бонусы</a>
                </Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={3}>
            <Typography variant='h6'>Свяжитесь с нами</Typography>
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
          <p>
            Copyright © 2020 Online shopping MacBro.uz. All rights reserved.
          </p>
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
