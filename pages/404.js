import React from 'react'
import { Link, useTranslation } from '../i18n'
import SEO from '../components/seo'
function Page404() {
  const { t } = useTranslation()
  return (
    <>
      <SEO title={t('seo.not_found')} />
      <Link href='/'>
        <a>{t('to-main-page')}</a>
      </Link>
    </>
  )
}
export default Page404
