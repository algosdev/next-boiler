import React from 'react'
import { Grid, Container } from '@material-ui/core'
import SEO from '../components/seo'
import ContactDetails from '../components/contact/contactDetails'
import ContactForm from '../components/contact/contactForm'
function contact() {
  return (
    <>
      <SEO />
      <div className='white_bg'>
        <Container>
          <Grid container spacing={6}>
            <Grid item xs={7}>
              <ContactForm />
            </Grid>
            <Grid item xs={5}>
              <ContactDetails />
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  )
}

export default contact
