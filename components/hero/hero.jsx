import React from 'react'
import style from './hero.module.scss'
import { Container } from '@material-ui/core'
import Link from 'next/link'

export default function Hero() {
  return (
    <div className={style.hero}>
      <img
        src='images/macbook_air.jpg'
        alt='Macbook air'
        className={style.background}
      />
      <div className={style.wrapper}>
        <Container>
          <span className={style.new}>Новый</span>
          <h2 className={style.title}>Macbook Air</h2>
          <div className={style.desc}>Мощность. Это в воздухе.</div>
          <p className={style.content}>
            От $999 or <br />
            $83.25/месяц на 12 месяцы.**
          </p>
          <div>
            <Link href='/'>
              <a className={style.callToAction}>Купить</a>
            </Link>
          </div>
        </Container>
      </div>
    </div>
  )
}
