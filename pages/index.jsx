import CatalogList from '../components/catalogList/catalogList'
import Hero from '../components/hero/hero'
import SEO from '../components/seo'
import BannerContainer from '../components/bannerContainer/bannerContainer'
import Banner from '../components/banner/banner'
import { useTranslation } from '../i18n'
export default function Home() {
  const { t } = useTranslation()
  const appleProducts = {
    title: t('apple_p'),
    catalog: [
      {
        name: 'iPhone',
        image: 'images/iphone.png',
      },
      {
        name: 'iPad',
        image: 'images/ipad.png',
      },
      {
        name: 'Apple Watch',
        image: 'images/apple_watch.png',
      },
      {
        name: 'AirPods',
        image: 'images/airpods.png',
      },
      {
        name: 'Macbook',
        image: 'images/mac_m1.jpg',
      },
      {
        name: 'iMac',
        image: 'images/imac.jpg',
      },
      {
        name: t('accessories'),
        image: 'images/accessories.png',
      },
    ],
  }

  const samsungProducts = {
    title: t('samsung_p'),
    catalog: [
      {
        name: t('galaxy_phones'),
        image: 'images/galaxy_s20.jpg',
      },
      {
        name: t('tablets'),
        image: 'images/samsung_tabs.jpg',
      },
      {
        name: t('watches'),
        image: 'images/samsung_watches.png',
      },
      {
        name: t('buds'),
        image: 'images/galaxy_buds.png',
      },
    ],
  }

  return (
    <>
      <SEO />
      <Hero />
      <CatalogList data={appleProducts} />
      {/* <BannerContainer>
        <Banner
          size={12}
          name='pervyi-banner-1720x260'
          src='images/poster_watches.jpg'
        />
      </BannerContainer> */}
      <CatalogList data={samsungProducts} />
    </>
  )
}
