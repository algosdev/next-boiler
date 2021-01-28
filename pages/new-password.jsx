import React from 'react';
import { Container, Typography } from '@material-ui/core';
import NewPasswordForm from '../components/authForm/newPasswordForm';
import SEO from '../components/seo';
import { fetchMultipleUrls } from '../lib/fetchMultipleUrls';
function NewPassword() {
  return (
    <>
      <SEO />
      <Container style={{ marginTop: 'auto' }}>
        <NewPasswordForm />
      </Container>
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

export default NewPassword;
