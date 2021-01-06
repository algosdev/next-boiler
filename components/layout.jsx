import React from 'react'
import Header from './header/header'
import Footer from './footer/footer'

export default function Layout({ children }) {
  return (
    <div className='main_container' id='macbro_container'>
      <Header />
      <div className='header_margin'></div>
      {children}
      <Footer />
    </div>
  )
}
