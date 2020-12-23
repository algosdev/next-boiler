import CatalogList from '../components/catalogList/catalogList'
import Hero from '../components/hero/hero'
import SEO from '../components/seo'
import BannerContainer from '../components/bannerContainer/bannerContainer'
import Banner from '../components/banner/banner'

export default function Home() {
  return (
    <>
      <SEO />
      <Hero />
      <CatalogList title='Apple products' />
      <BannerContainer>
        <Banner
          size={9}
          name='banner-po-seredine-1300x260'
          src='images/cash_back.jpg'
        />
        <Banner
          size={3}
          name='malyi-nizhnii-banner-420x260'
          src='images/delivery.jpg'
        />
      </BannerContainer>
      <CatalogList title='Samsung products' />
      <BannerContainer>
        <Banner
          size={12}
          name='pervyi-banner-1720x260'
          src='images/payment_plan.jpg'
        />
      </BannerContainer>
      <CatalogList title='Acoustics' />
    </>
  )
}
