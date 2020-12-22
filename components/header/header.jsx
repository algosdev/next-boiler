import React from 'react'
import style from './header.module.scss'
import { Container } from '@material-ui/core'
import Link from 'next/link'
import { BrandLogo } from '../svg'
import { SearchOutlined, LocalMallOutlined } from '@material-ui/icons'

export default function Header() {
  return (
    <>
      <div className={style.topBar}>
        <Container>
          <div className={style.wrapper}>
            <ul className={style.list}>
              <li className={style.listItem}>
                <Link href='/'>
                  <a>Магазины</a>
                </Link>
              </li>
              <li className={style.listItem}>
                <Link href='/'>
                  <a>Доставка</a>
                </Link>
              </li>
              <li className={style.listItem}>
                <Link href='/'>
                  <a>Блог</a>
                </Link>
              </li>
            </ul>
            <ul className={style.list}>
              <li className={style.listItem}>
                <Link href='/'>
                  <a>Русский</a>
                </Link>
              </li>
            </ul>
          </div>
        </Container>
      </div>
      <header className={style.header}>
        <Container>
          <div className={style.wrapper}>
            <div className={style.brandLogo}>
              <Link href='/'>
                <a>
                  <BrandLogo />
                </a>
              </Link>
            </div>
            <ul className={style.list}>
              <li className={style.listItem}>
                <Link href='/'>
                  <a>Apple products</a>
                </Link>
              </li>
              <li className={style.listItem}>
                <Link href='/'>
                  <a>Samsung products</a>
                </Link>
              </li>
              <li className={style.listItem}>
                <Link href='/'>
                  <a>Acoustics</a>
                </Link>
              </li>
              <li className={style.listItem}>
                <Link href='/'>
                  <a>Accessories</a>
                </Link>
              </li>
              <li className={style.listItem}>
                <Link href='/'>
                  <a><SearchOutlined /></a>
                </Link>
              </li>
              <li className={style.listItem}>
                <Link href='/'>
                  <a><LocalMallOutlined /></a>
                </Link>
              </li>
            </ul>
          </div>
        </Container>
      </header>
    </>
  )
}
