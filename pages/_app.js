import '../styles/globals.css'
import React from 'react'
import { Provider } from 'react-redux'
import { useStore } from '../redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import PropTypes from 'prop-types'
import CssBaseline from '@material-ui/core/CssBaseline'
import Layout from '../components/layout'
import { appWithTranslation } from '../i18n'
import NProgress from 'nprogress'
import Router from 'next/router'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => {
  NProgress.done()
  scrollTop()
})

Router.events.on('routeChangeError', () => NProgress.done())
function scrollTop() {
  if (window) {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }
}

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)
  const persistor = persistStore(store)
  return (
    <Provider store={store}>
      <CssBaseline />
      {typeof window !== 'undefined' ? (
        <PersistGate loading={null} persistor={persistor}>
          <Layout category={pageProps.categories}>
            <Component {...pageProps} />
          </Layout>
        </PersistGate>
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </Provider>
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
}

export default appWithTranslation(MyApp)
