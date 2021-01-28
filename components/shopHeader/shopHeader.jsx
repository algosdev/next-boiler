import { Container, ClickAwayListener } from '@material-ui/core';
import React, { useState } from 'react';
import style from './shopHeader.module.scss';
import { useTranslation, Link, Router } from '../../i18n';
import { useRouter } from 'next/router';
import { KeyboardArrowDown } from '@material-ui/icons';
import { motion, AnimatePresence } from 'framer-motion';
import SubCategDropdown from './subCategDropdown';
export default function ShopHeader({ categ, subCateg, childCategs }) {
  const router = useRouter();
  const { t } = useTranslation();
  const [sortByOpen, setSortByOpen] = useState(false);
  const [activeSubCateg, setActiveSubCateg] = useState('');
  const navData = [
    {
      title: t('apple_p'),
      subCategs: [
        { title: 'Iphone', link: 'category=apple_p&subcategory=Iphone' },
        { title: 'Ipad', link: 'category=apple_p&subcategory=Ipad' },
        {
          title: 'Apple watch',
          link: 'category=apple_p&subcategory=Apple_watch',
        },
        { title: 'AirPod', link: 'category=apple_p&subcategory=AirPod' },
        { title: 'Macbook', link: 'category=apple_p&subcategory=Macbook' },
        { title: 'iMac', link: 'category=apple_p&subcategory=iMac' },
      ],
    },
    {
      title: t('samsung_p'),
      subCategs: [
        {
          title: t('galaxy_phones'),
          link: 'category=samsung_p&subcategory=galaxy@phones',
        },
        { title: t('watches'), link: 'category=samsung_p&subcategory=watches' },
        { title: t('tablets'), link: 'category=samsung_p&subcategory=tablets' },
        { title: t('watches'), link: 'category=samsung_p&subcategory=watches' },
      ],
    },
    {
      title: t('acoustics'),
      subCategs: [
        {
          title: t('speakers'),
          link: 'category=acoustics&subcategory=speakers',
        },
        {
          title: t('earphones'),
          link: 'category=acoustics&subcategory=earphones',
        },
        {
          title: t('microphones'),
          link: 'category=acoustics&subcategory=microphones',
        },
      ],
    },
    {
      title: t('accessories'),
      subCategs: [
        { title: t('covers'), link: 'category=accessories&subcategory=covers' },
        {
          title: t('chargers'),
          link: 'category=accessories&subcategory=chargers',
        },
      ],
    },
  ];
  console.log(subCateg);
  return (
    <div className={style.shopHeader}>
      {!router.query.term ? (
        <div className={style.top_header}>
          <Container className={style.content}>
            <div className={style.categ}>{categ?.category?.name}</div>
            <div className={style.dropdown}>
              <SubCategDropdown
                data={childCategs}
                parentCateg={categ?.category?.slug}
                txt={t('browse_all')}
              />
            </div>
          </Container>
        </div>
      ) : (
        ''
      )}
      <Container>
        <div
          className={`${style.wrapper} ${
            router.query.term ? style.search : ''
          }`}
        >
          <h1 className={style.title}>
            {router.query.term
              ? `Результаты поиска по запросу "${decodeURI(router.query.term)}"`
              : subCateg?.category?.name}
          </h1>
        </div>
      </Container>
    </div>
  );
}
