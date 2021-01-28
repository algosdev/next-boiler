import React from 'react';
import ProductList from '../../components/productList/productList';
import SEO from '../../components/seo';
import ShopHeader from '../../components/shopHeader/shopHeader';
import { useTranslation } from '../../i18n';
import { fetchMultipleUrls } from '../../lib/fetchMultipleUrls';
export default function Shop({ categ, subCateg, childCategs }) {
  const { t } = useTranslation();
  return (
    <>
      <SEO title={t('products')} description={t('product_list_desc')} />
      <ShopHeader categ={categ} subCateg={subCateg} childCategs={childCategs} />
      <ProductList />
    </>
  );
}
export async function getServerSideProps({ query }) {
  const urls = [
    'http://46.101.122.150:1235/v1/category',
    `http://46.101.122.150:1235/v1/category/${query.categ}`,
    `http://46.101.122.150:1235/v1/category/${query.subcateg}`,
  ];
  const [categories, categ, subCateg] = await fetchMultipleUrls(urls);
  const childCategs = categories?.categories.filter(
    (el) => el.slug === query?.categ
  );
  return {
    props: {
      categories,
      subCateg,
      categ,
      childCategs: childCategs?.length ? childCategs[0].children : null,
    },
  };
}
