import CatalogList from '../components/catalogList/catalogList'
import Hero from '../components/hero/hero'
import SEO from '../components/seo'

export default function Home() {
  return (
    <>
      <SEO />
      <Hero />
      <CatalogList />
    </>
  )
}
