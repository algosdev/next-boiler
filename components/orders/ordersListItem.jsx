import React, { useState, useEffect } from 'react'
import style from './orders.module.scss'
import { Link } from '../../i18n'
function CheckoutListItem() {
  return (
    <>
      <Link href={`/orders/${'slug'}`}>
        <a>
          <div className={style.wrapper_item}>
            <div className={style.inner}>
              <div className={style.header}>Order {'#00001'}</div>
              <div className={style.details}>
                <p>
                  <span>Date: </span>
                  {'2020-10-29 18:16:26'}
                </p>
                <p>
                  <span>Status: </span>
                  {'In progress'}
                </p>
                <p>
                  <span>Total: </span>
                  {'600000 soum'}
                </p>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </>
  )
}

export default CheckoutListItem
