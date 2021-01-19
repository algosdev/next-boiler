import React from 'react';
import CompareContent from '../components/compare/compareContent';
import CompareFilter from '../components/compare/compareFilter';
import SEO from '../components/seo';
import { Container } from '@material-ui/core';
import { useTranslation } from '../i18n';
function compare() {
  const { t } = useTranslation();
  return (
    <>
      <SEO title={t('compare')} description={t('compare_desc')} />
      <div style={{ background: '#fff' }}>
        <Container>
          <CompareFilter />
          {/* <CompareContent /> */}
        </Container>
      </div>
    </>
  );
}

export default compare;
