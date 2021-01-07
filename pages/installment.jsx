import React from 'react'
import InstallmentBanner from '../components/installment/installmentBanner'
import InstallmentContent from '../components/installment/installmentContent'
import SEO from '../components/seo'
function Installment() {
  return (
    <div>
      <SEO />
      <InstallmentBanner />
      <InstallmentContent />
    </div>
  )
}

export default Installment
