import { Link } from '@material-ui/core';
import React from 'react';
import LatestNewsCarousel from '../../components/news/latestNewsCarousel';
import NewsSingleContent from '../../components/news/newsSingleContent';
import NewsSingleHeader from '../../components/news/newsSingleHeader';
import SEO from '../../components/seo';
import { fetchMultipleUrls } from '../../lib/fetchMultipleUrls';
function NewsSingle() {
  return (
    <>
      <SEO title={'Новый филиал в Юнусабаде'} />
      <div style={{ background: '#fff', padding: '50px 0' }}>
        <NewsSingleHeader />
        <NewsSingleContent />
        <LatestNewsCarousel />
      </div>
    </>
  );
}
export async function getServerSideProps() {
  const urls = ['http://46.101.122.150:1235/v1/category'];
  const [categories] = await fetchMultipleUrls(urls);
  return {
    props: {
      categories,
    },
  };
}

export default NewsSingle;
