import React from 'react';
import InstallmentBanner from '../components/installment/installmentBanner';
import InstallmentContent from '../components/installment/installmentContent';
import SEO from '../components/seo';
import { useTranslation } from '../i18n';
function Installment() {
  const { t } = useTranslation();
  return (
    <>
      <SEO title={t('installment')} description={t('installment_desc')} />
      <InstallmentBanner />
      <InstallmentContent />
    </>
  );
}

export default Installment;
