import Head from 'next/head'
export default function SEO({ title, description, image, keywords }) {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta charSet='utf-8' />
      <title>{title ? `${title} | MacBro` : `MacBro`}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='/apple-touch-icon.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href='/favicon-32x32.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='192x192'
        href='/android-chrome-192x192.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href='/favicon-16x16.png'
      />
      <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#1d1d1d' />
      <meta name='msapplication-TileColor' content='#2d89ef' />
      <meta name='msapplication-TileImage' content='/mstile-144x144.png' />
      <meta property='og:type' content='website' />
      <meta
        property='og:title'
        content={title ? `${title} | MacBro` : `MacBro`}
        key='ogtitle'
      />
      <meta name='theme-color' content='#1d1d1d' />
      <meta property='og:description' content={description} key='ogdesc' />
      <meta property='og:site_name' content='MacBro' key='ogsitename' />
      <link rel='manifest' href='/manifest.json' />
      <meta name='twitter:card' content='summary' />
      <meta
        name='twitter:title'
        content={title ? `${title} | MacBro` : `MacBro`}
      />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:site' content='MacBro' />
      <meta name='twitter:creator' content='DeveloperBoy' />
    </Head>
  )
}
