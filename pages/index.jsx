import CatalogList from '../components/catalogList/catalogList';
import Hero from '../components/hero/hero';
import SEO from '../components/seo';
import BannerContainer from '../components/bannerContainer/bannerContainer';
import Banner from '../components/banner/banner';
import { useTranslation } from '../i18n';
import { fetchMultipleUrls } from '../lib/fetchMultipleUrls';
export default function Home({ categories }) {
  const { t } = useTranslation();
  const appleProducts = {
    title: t('apple_p'),
    catalog: [
      {
        name: 'iPhone',
        image: 'images/iphone.png',
        link: 'category=apple_p&subcategory=Iphone',
      },
      {
        name: 'iPad',
        image: 'images/ipad.png',
        link: 'category=apple_p&subcategory=Ipad',
      },
      {
        name: 'Apple Watch',
        image: 'images/apple_watch.png',
        link: 'category=apple_p&subcategory=Apple_watch',
      },
      {
        name: 'AirPods',
        image: 'images/airpods.png',
        link: 'category=apple_p&subcategory=AirPod',
      },
      {
        name: 'Macbook',
        image: 'images/mac_m1.jpg',
        link: 'category=apple_p&subcategory=Macbook',
      },
      {
        name: 'iMac',
        image: 'images/imac.jpg',
        link: 'category=apple_p&subcategory=iMac',
      },
      {
        name: t('accessories'),
        image: 'images/accessories.png',
        link: 'category=accessories&subcategory=covers',
      },
    ],
  };

  const samsungProducts = {
    title: t('samsung_p'),
    catalog: [
      {
        name: t('galaxy_phones'),
        image: 'images/galaxy_s20.jpg',
        link: 'category=samsung_p&subcategory=galaxy@phones',
      },
      {
        name: t('tablets'),
        link: 'category=samsung_p&subcategory=tablets',
        image: 'images/samsung_tabs.jpg',
      },
      {
        name: t('watches'),
        link: 'category=samsung_p&subcategory=watches',
        image: 'images/samsung_watches.png',
      },
      {
        name: t('buds'),
        image: 'images/galaxy_buds.png',
        link: 'category=acoustics&subcategory=earphones',
      },
    ],
  };
  return (
    <>
      <SEO title={t('main')} description={t('main_desc')} />
      <Hero />
      {categories?.categories
        .filter((item, index) => index < 2)
        ?.map((el, ind) => {
          return <CatalogList data={el} key={ind} />;
        })}

      <BannerContainer>
        <Banner
          size={12}
          name='pervyi-banner-1720x260'
          src='images/poster_watches.jpg'
        />
      </BannerContainer>
      {categories?.categories
        .filter((item, index) => index > 1)
        ?.map((el, ind) => {
          return <CatalogList data={el} key={ind} />;
        })}
    </>
  );
}

export async function getServerSideProps({ req }) {
  const urls = ['http://46.101.122.150:1235/v1/category'];
  const [categories] = await fetchMultipleUrls(urls);
  return {
    props: {
      categories,
    },
  };
}
