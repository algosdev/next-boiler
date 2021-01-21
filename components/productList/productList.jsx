import React, { useState } from 'react';
import style from './productList.module.scss';
import { Link } from '../../i18n';
import { List, KeyboardArrowDown } from '@material-ui/icons';
import {
  Grid,
  Typography,
  ClickAwayListener,
  Checkbox,
  FormControlLabel,
} from '@material-ui/core';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from '../../i18n';
import { numberToPrice } from '../../lib/numberToPrice';
import Slider from '@material-ui/core/Slider';
import ProductHeader from './productHeader';
import ProductFilter from './productFilter';
import ProductListItem from './productListItem';

export default function ProductList() {
  const { t } = useTranslation();

  const productListData = [
    // {
    //   type: t('new'),
    //   id: '1',
    //   price: '15490000',
    //   name: 'Ipad',
    //   img: '/images/ipad.png',
    //   colors: ['grey', 'yellow', 'black'],
    //   slug: 'ipad',
    // },
    // {
    //   type: t('new'),
    //   id: '99',
    //   price: '18000000',
    //   name: 'Macbook',
    //   img: '/images/macbook.jpg',
    //   colors: ['green', 'yellow', 'black'],
    //   slug: 'macbook',
    // },

    // {
    //   type: t('new'),
    //   id: '77',
    //   price: '5490000',
    //   name: 'Iphone ',
    //   img: '/images/iphone.jpg',
    //   colors: ['green', 'yellow', 'black'],
    //   slug: 'iphome',
    // },
    {
      type: t('new'),
      id: '88',
      colors: ['green', 'yellow', 'black'],
      price: '5490000',
      name: 'AirPods Max',
      img: '/images/airpods.png',
      slug: 'airpods-max',
    },
    {
      type: t('new'),
      id: '2',
      price: '990000',
      name: 'HomePod mini',
      img: '/images/homepod_mini.png',
      colors: ['yellow', 'black'],
      slug: 'homepod',
    },
    {
      type: t('new'),
      id: '3',
      price: '490000',
      name: 'iPhone 12 Pro Max simple case',
      img: '/images/case.png',
      colors: ['orange'],
      slug: 'iphone12-case',
    },
    {
      type: t('new'),
      id: '4',
      price: '850000',
      name: 'iPhone 12 mini Silicone case',
      img: '/images/silicone_case.png',
      colors: ['plum'],
      slug: 'iphone12-silicone-case',
    },
    {
      type: t('new'),
      id: '5',
      price: '590000',
      name: 'iPhone Leather Wallet',
      img: '/images/wallet.png',
      colors: ['brown'],
      slug: 'iphone-leather-waller',
    },
  ];
  const [activeSortBy, setActiveSortBy] = useState(0);
  const [showFilter, setShowFilter] = useState(true);
  const [sortByOpen, setSortByOpen] = useState(false);

  return (
    <div className={style.productListWrapper}>
      <ProductHeader showFilter={showFilter} setShowFilter={setShowFilter} />
      <div className={style.productList}>
        <div className={style.wrapper}>
          <ProductFilter showFilter={showFilter} />
          <Grid container>
            {productListData.map((item, index) => (
              <Grid item xs={6} xl={3} sm={6} lg={4} md={6} sh={12} key={index}>
                <ProductListItem item={item} key={index} />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
}
