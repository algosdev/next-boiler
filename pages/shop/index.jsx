import React from 'react';
import ProductList from '../../components/productList/productList';
import SEO from '../../components/seo';
import ShopHeader from '../../components/shopHeader/shopHeader';
import { useTranslation } from '../../i18n';
export default function Shop() {
  const { t } = useTranslation();
  return (
    <>
      <SEO title={t('products')} description={t('product_list_desc')} />
      <ShopHeader />
      <ProductList />
    </>
  );
}
