import React from 'react'
import style from './hero.module.scss'
import { Container } from '@material-ui/core'
import Carousel from 'react-bootstrap/Carousel'
import { Link, useTranslation, i18n } from '../../i18n'
import 'bootstrap/dist/css/bootstrap.min.css'
export default function Hero() {
  const { t } = useTranslation()
  const data1 = {
    en: {
      slogan: "Power. It's in the air.",
      t2: 'From $999 or',
      t3: '$83.25/m на 12 months.',
    },
    ru: {
      slogan: 'Мощность. Это в воздухе.',
      t2: 'От $999 или',
      t3: '$83.25/месяц на 12 месяцы.',
    },
    uz: {
      slogan: 'Quvvat. Bu havoda.',
      t2: '$999 dan yoki',
      t3: '$83.25/oydan 12 oyga',
    },
  }
  const data2 = {
    en: {
      slogan: 'Feel real speed',
      t2: 'From $1599 or',
      t3: '$145.25/m на 12 months.',
    },
    ru: {
      slogan: 'Почувствуйте настоящую скорость',
      t2: 'От $1599 или',
      t3: '$145.25/месяц на 12 месяцы.',
    },
    uz: {
      slogan: 'Haqiqiy tezlikni his qiling',
      t2: '$1599 dan yoki',
      t3: '$145.25/oydan 12 oyga',
    },
  }
  return (
    <div className={style.hero}>
      {/* <img
        src='images/macbook_air.jpg'
        alt='Macbook air'
        className={style.background}
      /> */}
      <Carousel>
        <Carousel.Item>
          <img
            src='images/macbook_air.jpg'
            alt='Macbook air'
            className={style.background}
          />
          <Carousel.Caption>
            <div className={style.wrapper}>
              <span className={style.new}>{t('new')}</span>
              <h2 className={style.title}>Macbook Air</h2>
              <div className={style.desc}>{data1[i18n.language]?.slogan}</div>
              <p className={style.content}>
                {data1[i18n.language]?.t2} <br />
                {data1[i18n.language]?.t3}
              </p>
              <div>
                <Link href='/'>
                  <a className={style.callToAction}>{t('buy')}</a>
                </Link>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src='images/macbook_air2.jpg'
            alt='Macbook air'
            className={style.background}
          />

          <Carousel.Caption>
            <div className={style.wrapper}>
              <span className={style.new}>{t('new')}</span>
              <h2 className={style.title}>Macbook Pro</h2>
              <div className={style.desc}>{data2[i18n.language]?.slogan}</div>
              <p className={style.content}>
                {data2[i18n.language]?.t2} <br />
                {data2[i18n.language]?.t3}
              </p>
              <div>
                <Link href='/'>
                  <a className={style.callToAction}>{t('buy')}</a>
                </Link>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}
