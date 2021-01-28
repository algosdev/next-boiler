import React from 'react';
import { Container, Typography } from '@material-ui/core';
import SignInForm from '../components/authForm/signInForm';
import SEO from '../components/seo';
import { useTranslation } from '../i18n';
import { fetchMultipleUrls } from '../lib/fetchMultipleUrls';
function signIn() {
  const { t } = useTranslation();
  return (
    <>
      <SEO
        title={t('signin')}
        description={`${t('signin')} - ${t('auth_desc')}`}
        keywords={'signin, логин, login, authorization, MacBro, form'}
      />
      <div className='white_bg'>
        <Container style={{ marginTop: 'auto' }}>
          <SignInForm />
        </Container>
      </div>
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

export default signIn;
