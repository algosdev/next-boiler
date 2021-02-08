import React from 'react'
import style from './recommended.module.scss'
import ReactSlick from 'react-slick'
import { numberToPrice } from '../../lib/numberToPrice'
import { NextArrow, PrevArrow } from '../carouselArrows'
import { Link, useTranslation } from '../../i18n'
import { Container } from '@material-ui/core'
function Recommended({ relatedProducts }) {
  const { t } = useTranslation()
  const productListData = [
    {
      type: t('new'),
      id: '1',
      price: '5490000',
      name: 'AirPods Max',
      img: '/images/airpods_max.jpg',
      colors: ['green', 'yellow', 'black'],
      slug: 'airpods-max',
    },
    {
      type: t('new'),
      id: '2',
      price: '990000',
      name: 'HomePod mini',
      img: '/images/homepod_mini.jpeg',
      colors: ['yellow', 'black'],
      slug: 'homepod',
    },
    {
      type: t('new'),
      id: '3',
      price: '490000',
      name: 'iPhone 12 Pro Max simple case',
      img: '/images/case.jpeg',
      colors: ['orange'],
      slug: 'iphone12-case',
    },
    {
      type: t('new'),
      id: '4',
      price: '850000',
      name: 'iPhone 12 mini Silicone case',
      img: '/images/silicone_case.jpeg',
      colors: ['plum'],
      slug: 'iphone12-silicone-case',
    },
    {
      type: t('new'),
      id: '5',
      price: '590000',
      name: 'iPhone Leather Wallet',
      img: '/images/wallet.jpeg',
      colors: ['brown'],
      slug: 'iphone-leather-waller',
    },
  ]
  const responsive = [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        dots: true,
      },
    },
    {
      breakpoint: 860,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
  ]

  return (
    <div className={style.wrapper}>
      <div className={style.inner}>
        <div className={style.main_title}>{t('recommended')}</div>
        <Container>
          <ReactSlick
            {...{
              dots: false,
              infinite: false,
              speed: 500,
              slidesToShow: 3,
              slidesToScroll: 1,
              responsive,
              nextArrow: <NextArrow />,
              prevArrow: <PrevArrow />,
            }}
          >
            {relatedProducts &&
              relatedProducts.map((item, ind) => (
                <div className={style.product} key={item.id}>
                  <Link href={`/shop/${item.slug}`}>
                    <a>
                      <img src={item.image} alt={item.name} />
                      {/* <span className={style.type}>{item.type}</span> */}
                      <h3 className={style.name}>{item.name}</h3>
                      <span className={style.price}>
                        {numberToPrice(item.price.price)} {t('soum')}
                      </span>
                      {/* <div className={style.colors}>
                      {item.colors.map((color, ind) => (
                        <span
                          key={ind}
                          className={`${style[color]} ${style.color}`}
                        />
                      ))}
                    </div> */}
                    </a>
                  </Link>
                </div>
              ))}
          </ReactSlick>
        </Container>
      </div>
    </div>
  )
}

export default Recommended
