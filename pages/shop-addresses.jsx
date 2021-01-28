import React from 'react';
import { Container } from '@material-ui/core';
import SEO from '../components/seo';
import Shops from '../components/shops/shops';
import { useTranslation } from '../i18n';
import { fetchMultipleUrls } from '../lib/fetchMultipleUrls';
function shopAddresses() {
  const { t } = useTranslation();
  return (
    <>
      <SEO
        title={t('address_of_branches')}
        description={t('shop_branches_desc')}
      />
      <div style={{ background: '#fff' }}>
        <Container>
          <Shops />
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

export default shopAddresses;
