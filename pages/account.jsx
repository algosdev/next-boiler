import React from 'react'
import AccountHeader from '../components/account/header'
import AccountSettings from '../components/account/settings'
import SEO from '../components/seo'
import { useTranslation } from '../i18n'
import { fetchMultipleUrls } from '../lib/fetchMultipleUrls'
import { shallowEqual, useSelector } from 'react-redux'

function Account() {
  const { t } = useTranslation()
  const user = useSelector((state) => state.auth.user, shallowEqual)
  return (
    <>
      <SEO
        title={t('profile')}
        description={t('settings_desc')}
        keywords={
          'account, profile, счет, settings, настройка, sozlamalar, hisob'
        }
      />
      <AccountHeader userName={user && user.name} />
      <AccountSettings user={user} />
    </>
  )
}
export async function getServerSideProps({ req }) {
  const urls = [`${process.env.CATEGORY_API_URL}?lang=${req.i18n.language}`]
  const [categories] = await fetchMultipleUrls(urls)
  return {
    props: {
      categories,
    },
  }
}

export default Account
