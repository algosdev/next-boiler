import React from 'react';
import { Container, Typography } from '@material-ui/core';
import ForgotForm from '../components/authForm/forgotForm';
import SEO from '../components/seo';
import { fetchMultipleUrls } from '../lib/fetchMultipleUrls';
function forgot() {
  return (
    <>
      <SEO />
      <Container style={{ marginTop: 'auto' }}>
        <ForgotForm />
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

export default forgot;
