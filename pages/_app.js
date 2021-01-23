import '../styles/globals.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Layout from '../components/layout';
import { Provider } from 'react-redux';
import { useStore } from '../redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../theme/theme';
import { appWithTranslation } from '../i18n.js';
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css';
import { Router } from 'next/router';
import { useEffect } from 'react';
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => {
  NProgress.done();
  scrollTop();
});
Router.events.on('routeChangeError', () => NProgress.done());
function scrollTop() {
  if (window) {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
}

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);
  const persistor = persistStore(store);
  // useEffect(() => {
  //   if (navigator) {
  //     if ("serviceWorker" in navigator) {
  //       window.addEventListener("load", () => {
  //         navigator.serviceWorker
  //           .register("/serviceWorkers.js")
  //           .then((reg) => console.log("Success: ", reg))
  //           .catch((err) => console.log("Failure: ", err));
  //       });
  //     }
  //   }
  // });
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        {typeof window !== 'undefined' ? (
          <PersistGate loading={null} persistor={persistor}>
            <Layout>
              <CssBaseline />
              <Component {...pageProps} />
            </Layout>
          </PersistGate>
        ) : (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        )}
      </ThemeProvider>
    </Provider>
  );
}

export default appWithTranslation(MyApp);
