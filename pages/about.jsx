import React from 'react';
import AboutBanner from '../components/about/aboutBanner';
import AboutContent from '../components/about/aboutContent';
import SEO from '../components/seo';
import { useTranslation } from '../i18n';
function about() {
  const { t } = useTranslation();
  return (
    <>
      <SEO title={t('about')} description={t('contact_desc')} />
      <AboutBanner />
      <AboutContent />
    </>
  );
}

export default about;
