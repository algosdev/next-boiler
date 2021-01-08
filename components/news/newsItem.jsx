import React from 'react'
import style from './news.module.scss'
import { Link } from '../../i18n'
function NewsItem({ data }) {
  console.log(data)
  return (
    <div className={style.wrapper_item}>
      {/* <Link href='/news/slug'> */}
      {/* <a> */}
      <div className={style.item}>
        <div className={style.img}>
          <img src={data.img} alt='' />
        </div>
        <div className={style.title}>{data.title}</div>
        <div className={style.date}>{data.date}</div>
        <div className={style.desc}>{data.desc}</div>
        {/* <Link href={`/news/${data.slug}`}> */}
        <a>Learn more</a>
        {/* </Link> */}
      </div>
      {/* </a> */}
      {/* // </Link> */}
    </div>
  )
}

export default NewsItem
