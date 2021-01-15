import React from 'react'
import { Grid, Container } from '@material-ui/core'
import SEO from '../components/seo'
import ContactDetails from '../components/contact/contactDetails'
import ContactForm from '../components/contact/contactForm'
import ContactContainer from '../components/contact/contactContainer'
function contact() {
  return (
    <>
      <SEO />
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

export default contact
