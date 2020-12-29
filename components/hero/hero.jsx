import React from 'react'
import style from './hero.module.scss'
import { Container } from '@material-ui/core'
import { Link, useTranslation, i18n } from '../../i18n'
export default function Hero() {
  const { t } = useTranslation()
  const data = {
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
  return (
    <div className={style.hero}>
      <img
        src='images/macbook_air.jpg'
        alt='Macbook air'
        className={style.background}
      />
      <div className={style.wrapper}>
        <Container>
          <span className={style.new}>{t('new')}</span>
          <h2 className={style.title}>Macbook Air</h2>
          <div className={style.desc}>{data[i18n.language]?.slogan}</div>
          <p className={style.content}>
            {data[i18n.language]?.t2} <br />
            {data[i18n.language]?.t3}
          </p>
          <div>
            <Link href='/'>
              <a className={style.callToAction}>{t('buy')}</a>
            </Link>
          </div>
        </Container>
      </div>
    </div>
  )
}
