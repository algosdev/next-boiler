import { Container } from '@material-ui/core'
import React from 'react'
import style from './news.module.scss'
import NewsItem from './newsItem'
function NewsContent() {
  const newsData = [
    {
      type: 'Обновления',
      title:
        'Apple представляет AirPods Max, волшебство AirPods в потрясающем дизайне с закрытыми наушниками',
      img: '/images/news1.jpg',
      id: '1',
      date: '13 октября 2020 г.',
      desc:
        'Представляем iPhone 12 и iPhone 12 Pro с 5G, аксессуары MagSafe и HomePod mini.',
      slug: 'slug',
    },
    {
      type: 'Новости',
      title:
        'IPhone 12 Pro Max и iPhone 12 mini от Apple продаются в магазинах и домах по всему миру',
      img: '/images/news2.jpg',
      id: '1',
      date: '13 октября 2020 г.',
      desc:
        'Представляем iPhone 12 и iPhone 12 Pro с 5G, аксессуары MagSafe и HomePod mini.',
      slug: 'slug',
    },
    {
      type: 'Фото',
      title: 'Новый гаджет от Samsung',
      img: '/images/news3.jpg',
      id: '1',
      date: '13 октября 2020 г.',
      desc:
        'Представляем iPhone 12 и iPhone 12 Pro с 5G, аксессуары MagSafe и HomePod mini.',
      slug: 'slug',
    },
  ]
  return (
    <div className={style.wrapper}>
      <Container>
        <div className={style.main_title}>Последние новости</div>
        <div className={`${style.grid} ${style.full}`}>
          {newsData.map((item, index) =>
            index < 1 ? <NewsItem key={index} data={item} /> : ''
          )}
        </div>
        <div className={`${style.grid} ${style.double}`}>
          {newsData.map((item, index) =>
            index < 2 ? <NewsItem key={index} data={item} /> : ''
          )}
        </div>
        <div className={style.grid}>
          {newsData.map((item, index) => (
            <NewsItem key={index} data={item} />
          ))}
        </div>
      </Container>
    </div>
  )
}

export default NewsContent
