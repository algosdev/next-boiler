import Head from 'next/head'

export default function SEO({ title, description, image, keywords }) {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta charSet='utf-8' />

      <title>{title ? `${title} | MacBro` : `MacBro`}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />

      <meta property='og:type' content='website' />
      <meta
        property='og:title'
        content={title ? `${title} | MacBro` : `MacBro`}
        key='ogtitle'
      />
      <meta property='og:description' content={description} key='ogdesc' />
      <meta property='og:site_name' content='MacBro' key='ogsitename' />
      {/* <meta property="og:url" content={location.href} key="ogurl" /> */}
      <meta
        property='og:image'
        content={image || 'images/carousel_1.jpg'}
        key='ogimage'
      />

      <meta name='twitter:card' content='summary' />
      <meta
        name='twitter:title'
        content={title ? `${title} | MacBro` : `MacBro`}
      />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:site' content='MacBro' />
      <meta name='twitter:creator' content='DeveloperBoy' />
      {/* <meta name='twitter:image' content={image || 'images/background.jpg'} /> */}

      {/* <link rel="canonical" href={location.href} /> */}
      <link rel='icon' href='/favicon.ico' />
    </Head>
  )
}
