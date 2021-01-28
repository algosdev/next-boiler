import React from 'react';
import { Container } from '@material-ui/core';
import AccountHeader from '../components/account/header';
import AccountSettings from '../components/account/settings';
import SEO from '../components/seo';
import { useTranslation } from '../i18n';
import { fetchMultipleUrls } from '../lib/fetchMultipleUrls';
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
export async function getServerSideProps() {
  const urls = ['http://46.101.122.150:1235/v1/category'];
  const [categories] = await fetchMultipleUrls(urls);
  console.log('AAA', categories);
  return {
    props: {
      categories,
    },
  };
}

export default account;
