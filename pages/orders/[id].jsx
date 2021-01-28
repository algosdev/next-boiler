import React from 'react';
import { Container } from '@material-ui/core';
import SEO from '../../components/seo';
import OrderSingleContainer from '../../components/orders/orderSingleContainer';
import { useTranslation } from '../../i18n';
import { fetchMultipleUrls } from '../../lib/fetchMultipleUrls';
function orders() {
  const { t } = useTranslation();
  return (
    <>
      <SEO title={`${t('order')} №6546`} />
      <Container>
        <OrderSingleContainer />
      </Container>
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
