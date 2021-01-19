import React from 'react';
import { Container } from '@material-ui/core';
import SEO from '../../components/seo';
import OrderSingleContainer from '../../components/orders/orderSingleContainer';
import { useTranslation } from '../../i18n';
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

export default orders;
