import React, { useEffect, useState } from 'react'
import { Container } from '@material-ui/core'
import AccountHeader from '../components/account/header'
import AccountSettings from '../components/account/settings'
import SEO from '../components/seo'
import { useTranslation } from '../i18n'
import { initializeStore } from '../redux/store'
import { fetchMultipleUrls } from '../lib/fetchMultipleUrls'
import { useDispatch, shallowEqual, useSelector } from 'react-redux'
import axios from 'axios'
function account() {
  const [data, setState] = useState(null)
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
      <AccountHeader />
      <AccountSettings user={user} />
    </>
  )
}
export async function getServerSideProps({ req }) {
  const store = initializeStore()
  const urls = [`${process.env.CATEGORY_API_URL}?lang=${req.i18n.language}`]
  const [categories] = await fetchMultipleUrls(urls)
  return {
    props: {
      categories,
    },
  }
}

export default account
