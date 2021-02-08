import React from 'react'
import { Grid, Container } from '@material-ui/core'
import SEO from '../components/seo'
import ContactDetails from '../components/contact/contactDetails'
import ContactForm from '../components/contact/contactForm'
import ContactContainer from '../components/contact/contactContainer'
import { useTranslation } from '../i18n'
import { fetchMultipleUrls } from '../lib/fetchMultipleUrls'
function contact() {
  const { t } = useTranslation()
  return (
    <>
      <SEO title={t('contact_us')} description={t('contact_desc')} />
      <div className='white_bg'>
        <Container>
          <ContactContainer />
          {/* <Grid container spacing={6}>
            <Grid item xs={12} sm={12} md={7}>
              <ContactForm />
            </Grid>
            <Grid item xs={12} sm={12} md={5}>
              <ContactDetails />
            </Grid>
          </Grid> */}
        </Container>
      </div>
    </>
  )
}
export async function getServerSideProps({ req }) {
  const urls = [`${process.env.CATEGORY_API_URL}?lang=${req.i18n.language}`]
  const [categories] = await fetchMultipleUrls(urls)
  console.log('AAA', categories)
  return {
    props: {
      categories,
    },
  }
}

export default contact
