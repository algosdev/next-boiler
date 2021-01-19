import React from 'react';
import { Container } from '@material-ui/core';
import CartList from '../components/cart/cartList';
import SEO from '../components/seo';
import { useTranslation } from '../i18n';
function cart() {
  const { t } = useTranslation();
  return (
    <>
      <SEO
        title={t('cart')}
        description={t('cart_desc')}
        keywords={'cart, корзинка, savatcha'}
      />
      <div
        style={{
          background: '#fff',
          padding: '50px 0',
          flexGrow: '1',
          height: '100%',
        }}
      >
        <Container>
          <CartList />
        </Container>
      </div>
    </>
  );
}

export default cart;
