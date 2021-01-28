import React from 'react';
import { useTranslation } from '../i18n';
import SEO from '../components/seo';
import { Container } from '@material-ui/core';
import { fetchMultipleUrls } from '../lib/fetchMultipleUrls';
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

export default checkoutInstallment;
