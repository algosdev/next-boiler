import React from 'react';
import style from './offline.module.scss';
import { Button } from '@material-ui/core';
import { Router, useTranslation } from '../../i18n';
import { useRouter } from 'next/router';
function OfflinePage() {
  const { t } = useTranslation();
  const router = useRouter();
  return (
    <div className={style.wrapper}>
      <img src='/images/offline.png' alt='Offline' />
      <div className={style.content}>
        <p>{t('offline_txt')}</p>
        <Button onClick={() => Router.reload()}>{t('try_again')}</Button>
        <Button className={style.back} onClick={() => Router.push('/')}>
          {t('back_home')}
        </Button>
      </div>
    </div>
  );
}

export default OfflinePage;
