import React from 'react';
import { useTranslation } from '../i18n';
import SEO from '../components/seo';
import { Container } from '@material-ui/core';
import InstallmentContainer from '../components/checkout_installment/installmentContainer';
function checkoutInstallment() {
  const { t } = useTranslation();
  return (
    <>
      <SEO
        title={`${t('installment')} | ${t('checkout')}`}
        description={t('checkout_desc')}
        keywords={"оплата, payment, to'lov, installment, расспочка"}
      />
      <div style={{ background: '#fff', padding: '50px 0' }}>
        <Container>
          <InstallmentContainer />
        </Container>
      </div>
    </>
  );
}

export default checkoutInstallment;
