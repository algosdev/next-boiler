import { Link } from '@material-ui/core';
import React from 'react';
import LatestNewsCarousel from '../../components/news/latestNewsCarousel';
import NewsSingleContent from '../../components/news/newsSingleContent';
import NewsSingleHeader from '../../components/news/newsSingleHeader';
import SEO from '../../components/seo';
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

export default NewsSingle;
