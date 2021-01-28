import React from 'react';
import { Container } from '@material-ui/core';
import OrderContainer from '../../components/orders/orderContainer';
import SEO from '../../components/seo';
import { useTranslation } from '../../i18n';
import { fetchMultipleUrls } from '../../lib/fetchMultipleUrls';
function orders() {
  const { t } = useTranslation();
  return (
    <>
      <SEO title={t('orders')} description={t('orders_desc')} />
      <div style={{ background: '#fff', padding: '50px 0' }}>
        <Container>
          <OrderContainer />
        </Container>
      </div>
    </>
  );
}
export async function getServerSideProps() {
  const urls = ['http://46.101.122.150:1235/v1/category'];
  const [categories] = await fetchMultipleUrls(urls);
  return {
    props: {
      categories,
    },
  };
}

export default orders;
