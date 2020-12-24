import React from 'react'
import Header from './header/header'
import Footer from './footer/footer'

export default function Layout({ children }) {
  return (
    <div className='main_container'>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
