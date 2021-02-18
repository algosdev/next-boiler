import React from 'react'
import Link from 'next/link'
import SEO from '../components/seo'
import { useTranslation } from '../i18n'
import { fetchMultipleUrls } from '../libs/fetchMultipleUrls'
function Error() {
  const { t } = useTranslation
  return (
    <>
      <SEO title={t('seo.error')} />
      <Link href='/'>
        <a className='btn'>{t('to-main-page')}</a>
      </Link>
    </>
  )
}
// export async function getServerSideProps({ req }) {
//     const urls = [`${process.env.SOME_URL}?lang=${req.i18n.language}`]
//     const [data] = await fetchMultipleUrls(urls)
//     return {
//       props: {
//         data,
//       },
//     }
//   }
export default Error
