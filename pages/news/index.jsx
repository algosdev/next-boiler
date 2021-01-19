import React from 'react';
import NewsBanner from '../../components/news/newsBanner';
import NewsContent from '../../components/news/newsContent';
import SEO from '../../components/seo';
import { useTranslation } from '../../i18n';
function news() {
  const { t } = useTranslation();
  return (
    <>
      <SEO title={t('news')} />
      {/* <NewsBanner /> */}
      <NewsContent />
    </>
  );
}

export default news;
