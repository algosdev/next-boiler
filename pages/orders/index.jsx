import React, { useEffect, useState } from 'react';
import { Container } from '@material-ui/core';
import OrderContainer from '../../components/orders/orderContainer';
import SEO from '../../components/seo';
import { useTranslation } from '../../i18n';
import { fetchMultipleUrls } from '../../lib/fetchMultipleUrls';
import axios from 'axios';
import { useDispatch, shallowEqual, useSelector } from 'react-redux';
function orders() {
  const [data, setData] = useState(null);
  const user = useSelector((state) => state.auth.user, shallowEqual);

  useEffect(() => {
    axios
      .get('http://46.101.122.150:1235/v1/my-orders?limit=100&page=1', {
        headers: {
          Authorization: user.access_token,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          setData(res.data);
        }
      });
  }, []);
  console.log(data);
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
