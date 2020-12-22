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
          <span className={style.new}>New</span>
          <h2 className={style.title}>Macbook Air</h2>
          <div className={style.desc}>Power. It's in the Air.</div>
          <p className={style.content}>
            From $999 or <br />
            $83.25/mo. for 12 mo.**
          </p>
          <div>
            <Link href='/'>
              <a className={style.callToAction}>Buy</a>
            </Link>
          </div>
        </Container>
      </div>
    </div>
  )
}
