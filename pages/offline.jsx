import React from 'react';
import OfflinePage from '../components/offline/OfflinePage';
import SEO from '../components/seo';
import { fetchMultipleUrls } from '../lib/fetchMultipleUrls';
function offline() {
  return (
    <>
      <SEO />
      <OfflinePage />
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

export default offline;
