import React, { useEffect, useState } from 'react';
import { Container } from '@material-ui/core';
import OrderContainer from '../../components/orders/orderContainer';
import SEO from '../../components/seo';
import { useTranslation } from '../../i18n';
import { fetchMultipleUrls } from '../../lib/fetchMultipleUrls';
import axios from 'axios';
function orders() {
  const [data, setData] = useState;
  console.log(data);
  useEffect(() => {
    axios
      .get('http://46.101.122.150:1235/v1/my-orders?limit=100&page=1', {
        headers: {
          Authorization:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MTIyNjg3MzQsImlzcyI6InVzZXIiLCJyb2xlIjoiY3VzdG9tZXIiLCJzdWIiOiIwZmI2OWU0Ny1jZTkyLTRmNWMtOTJhYi02MTQxYmE2ZTk4NjQifQ.fHXtWNUhHZpZqqSew3IpX1pazcLSPXsGe3C7vwPkUo0',
        },
      })
      .then((res) => {
        if (res.status === 200) {
          setData(res.data);
        }
      });
  }, []);
  const { t } = useTranslation();
  return (
    <>
      <SEO title={t('orders')} description={t('orders_desc')} />
      <div style={{ background: '#fff', padding: '50px 0' }}>
        <Container>
          <OrderContainer data={data} />
        </Container>
      </div>
    </>
  );
}
export async function getServerSideProps() {
  let data;
  const urls = ['http://46.101.122.150:1235/v1/category'];

  console.log(data);
  const [categories] = await fetchMultipleUrls(urls);
  return {
    props: {
      categories,
      // data,
    },
  };
}

export default orders;
