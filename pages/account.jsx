import React from 'react';
import { Container } from '@material-ui/core';
import AccountHeader from '../components/account/header';
import AccountSettings from '../components/account/settings';
import SEO from '../components/seo';
import { useTranslation } from '../i18n';
function account() {
  const { t } = useTranslation();
  return (
    <>
      <SEO
        title={t('profile')}
        description={t('settings_desc')}
        keywords={
          'account, profile, счет, settings, настройка, sozlamalar, hisob'
        }
      />
      <AccountHeader />
      <AccountSettings />
    </>
  );
}

export default account;
