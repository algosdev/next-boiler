import { Container } from '@material-ui/core'
import React from 'react'
import style from './news.module.scss'
import NewsItem from './newsItem'
function NewsContent() {
  const newsData = [
    {
      title: 'Macbro событие',
      img: '/images/news1.jpg',
      id: '1',
      date: '13 октября 2020 г.',
      desc:
        'Представляем iPhone 12 и iPhone 12 Pro с 5G, аксессуары MagSafe и HomePod mini.',
      slug: 'slug',
    },
    {
      title: 'Macbro событие',
      img: '/images/news2.jpg',
      id: '1',
      date: '13 октября 2020 г.',
      desc:
        'Представляем iPhone 12 и iPhone 12 Pro с 5G, аксессуары MagSafe и HomePod mini.',
      slug: 'slug',
    },
    {
      title: 'Macbro событие',
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
        <div className={style.main_title}>
          Посмотреть недавние события Apple
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
