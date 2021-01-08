import React from 'react'
import style from './news.module.scss'
import ReactSlick from 'react-slick'
import { numberToPrice } from '../../lib/numberToPrice'
import { NextArrow, PrevArrow } from '../carouselArrows'
import { Link, useTranslation } from '../../i18n'
import { Container } from '@material-ui/core'
import NewsItem from './newsItem'
function LatestNewsCarousel() {
  const { t } = useTranslation()
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
  const responsive = [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: false,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
  ]

  return (
    <Container>
      <div className={style.wrapper_latest}>
        <div className={style.inner}>
          <div className={style.main_title}>Последние новости</div>
          <ReactSlick
            {...{
              dots: true,
              infinite: false,
              speed: 500,
              slidesToShow: 2,
              slidesToScroll: 1,
              responsive,
              nextArrow: <NextArrow />,
              prevArrow: <PrevArrow />,
            }}
          >
            {newsData.map((item, index) => (
              <NewsItem key={index} data={item} />
            ))}
          </ReactSlick>
        </div>
      </div>
    </Container>
  )
}

export default LatestNewsCarousel
