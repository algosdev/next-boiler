import React from 'react';
import { Container, Grid } from '@material-ui/core';
import CheckoutContainer from '../components/checkout/checkoutContainer';
import CheckoutForm from '../components/checkout/checkoutForm';
import CheckoutDetails from '../components/checkout/checkoutDetails';
import SEO from '../components/seo';
import { fetchMultipleUrls } from '../lib/fetchMultipleUrls';
import { useTranslation } from '../i18n';
function checkout() {
  const { t } = useTranslation();
  return (
    <>
      <SEO
        title={t('checkout')}
        description={t('checkout_desc')}
        keywords={"оплата, payment, to'lov"}
      />
      <div style={{ background: '#fff', padding: '50px 0' }}>
        <Container>
          <CheckoutContainer />
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

export default checkout;
