import React from 'react';
import style from './header.module.scss';
import { Link, useTranslation } from '../../i18n';
import { numberToPrice } from '../../lib/numberToPrice';
import { Container, CircularProgress } from '@material-ui/core';
function QuickSearch({ term }) {
  const { t } = useTranslation();
  return (
    <div className={style.wrapper_quickSearch}>
      <Container>
        <div className={style.inner}>
          {term.length > 2 ? (
            <>
              <Link href='/shop/homepod'>
                <a className={style.item}>
                  <div className={style.img}>
                    <img src='/images/homepod_mini.png' alt='AirPod' />
                  </div>
                  <div className={style.item_content}>
                    <p className={style.price}>HomePod mini</p>
                    <p className={style.price}>
                      {t('price')}: {numberToPrice('780000')} {t('soum')}
                    </p>
                  </div>
                </a>
              </Link>

              <Link href='/shop/airpods-max'>
                <a className={style.item}>
                  <div className={style.img}>
                    <img src='/images/airpods.png' alt='AirPod' />
                  </div>
                  <div className={style.item_content}>
                    <p className={style.price}>AirPods Max 8D</p>
                    <p className={style.price}>
                      {t('price')}: {numberToPrice('450000')} {t('soum')}
                    </p>
                  </div>
                </a>
              </Link>
              <Link href='/shop/iphone12-case'>
                <a className={style.item}>
                  <div className={style.img}>
                    <img src='/images/case.png' alt='AirPod' />
                  </div>
                  <div className={style.item_content}>
                    <p className={style.price}>Iphone 12 case</p>
                    <p className={style.price}>
                      {t('price')}: {numberToPrice('66000')} {t('soum')}
                    </p>
                  </div>
                </a>
              </Link>
              <Link href='/shop/airpods-max'>
                <a className={style.item}>
                  <div className={style.img}>
                    <img src='/images/airpods.png' alt='AirPod' />
                  </div>
                  <div className={style.item_content}>
                    <p className={style.price}>AirPods Max 8D</p>
                    <p className={style.price}>
                      {t('price')}: {numberToPrice('450000')} {t('soum')}
                    </p>
                  </div>
                </a>
              </Link>
            </>
          ) : (
            ''
          )}
          {term.length < 3 ? (
            <div className={style.spinner}>
              <CircularProgress />
            </div>
          ) : (
            ''
          )}
        </div>
      </Container>
    </div>
  );
}

export default QuickSearch;
