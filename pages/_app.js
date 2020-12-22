import '../styles/globals.css'
import CssBaseline from '@material-ui/core/CssBaseline'
import Layout from '../components/layout'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from '../theme/theme'
import { appWithTranslation } from '../i18n.js'
import NProgress from 'nprogress' //nprogress module
import 'nprogress/nprogress.css'
import { Router } from 'next/router'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <CssBaseline />
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default appWithTranslation(MyApp)
