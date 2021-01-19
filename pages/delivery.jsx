import React from 'react';
import DeliveryBanner from '../components/delivery/deliveryBanner';
import DeliveryContent from '../components/delivery/deliveryContent';
import SEO from '../components/seo';
import { useTranslation } from '../i18n';
function Delivery() {
  const { t } = useTranslation();
  return (
    <>
      <SEO title={t('delivery')} description={t('delivery_desc')} />
      <DeliveryBanner />
      <DeliveryContent />
    </>
  );
}

export default Delivery;
