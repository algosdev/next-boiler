import React from 'react';
import { Container } from '@material-ui/core';
import SEO from '../components/seo';
import Shops from '../components/shops/shops';
import { useTranslation } from '../i18n';
function shopAddresses() {
  const { t } = useTranslation();
  return (
    <>
      <SEO
        title={t('address_of_branches')}
        description={t('shop_branches_desc')}
      />
      <Container>
        <Shops />
      </Container>
    </>
  );
}

export default shopAddresses;
