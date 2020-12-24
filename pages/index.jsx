import CatalogList from '../components/catalogList/catalogList'
import Hero from '../components/hero/hero'
import SEO from '../components/seo'
import BannerContainer from '../components/bannerContainer/bannerContainer'
import Banner from '../components/banner/banner'

const appleProducts = {
  title: 'Apple products',
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
      name: 'Accessories',
      image: 'images/accessories.png',
    },
  ],
}

const samsungProducts = {
  title: 'Samsung products',
  catalog: [
    {
      name: 'Galaxy smartphones',
      image: 'images/galaxy_s20.jpg',
    },
    {
      name: 'Tablets',
      image: 'images/samsung_tabs.jpg',
    },
    {
      name: 'Watches',
      image: 'images/samsung_watches.png',
    },
    {
      name: 'Buds',
      image: 'images/galaxy_buds.png',
    },
  ],
}

export default function Home() {
  return (
    <>
      <SEO />
      <Hero />
      <CatalogList data={appleProducts} />
      <BannerContainer>
        <Banner
          size={12}
          name='pervyi-banner-1720x260'
          src='images/poster_watches.jpg'
        />
      </BannerContainer>
      <CatalogList data={samsungProducts} />
    </>
  )
}
