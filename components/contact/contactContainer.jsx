import React from 'react'
import style from './contact.module.scss'
import ContactDetails from './contactDetails'
import ContactForm from './contactForm'
function ContactContainer() {
  return (
    <div className={style.main_wrapper}>
      <ContactForm />
      <ContactDetails />
    </div>
  )
}

export default ContactContainer
