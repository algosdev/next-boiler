import React from 'react';
import { Container } from '@material-ui/core';
import OrderContainer from '../../components/orders/orderContainer';
import SEO from '../../components/seo';
import { useTranslation } from '../../i18n';
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

export default orders;
