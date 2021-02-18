import React from 'react'
import SEO from '../components/seo'
import { fetchMultipleUrls } from '../libs/fetchMultipleUrls'
import { useTranslation } from '../i18n'
function offline() {
  const { t } = useTranslation()
  return (
    <>
      <SEO title={t('offline')} />
      <div></div>
    </>
  )
}
// export async function getServerSideProps({ req }) {
//   const urls = [`${process.env.SOME_URL}?lang=${req.i18n.language}`]
//   const [data] = await fetchMultipleUrls(urls)
//   return {
//     props: {
//       data,
//     },
//   }
// }
export default offline
