import React from 'react';
import { Container, Typography } from '@material-ui/core';
import SignUpForm from '../components/authForm/signUpForm';
import SEO from '../components/seo';
import { useTranslation } from '../i18n';
function signUp() {
  const { t } = useTranslation();
  return (
    <>
      <SEO
        title={t('signup')}
        description={`${t('signup')} - ${t('auth_desc')}`}
        keywords={'signup, зарегистрироваться, authorization, MacBro, form'}
      />
      <Container style={{ marginTop: 'auto' }}>
        <SignUpForm />
      </Container>
    </>
  );
}

export default signUp;
