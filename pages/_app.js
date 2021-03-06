import PropTypes from "prop-types";

// #next :
import Router from "next/router";
import { SWRConfig } from "swr";
import Head from "next/head";
import getConfig from "next/config";

// #contexts :

// #hooks :

// #components :
import { Nav } from "components/Nav";
import { Footer } from "components/Footer";

// #material-ui :
import { ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline, Button } from "@material-ui/core";
import theme from "styles/theme";

// #other :
import "styles/styles.css";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

import NProgress from "nprogress";
import "nprogress/nprogress.css";
NProgress.configure({
  showSpinner: false,
});
Router.events.on("routeChangeStart", () => {
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => {
  NProgress.done();
});
Router.events.on("routeChangeError", () => {
  NProgress.done();
});

function MyApp({ Component, pageProps, navigation, footer }) {
  return (
    <>
      <Head>
        <title>portfolio</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SWRConfig
          value={{
            fetcher: (url) => fetch(url).then((r) => r.json()),
          }}
        >
          <Nav navigation={navigation} />
          <Component {...pageProps} />
          <Footer footer={footer} />
        </SWRConfig>
      </ThemeProvider>
    </>
  );
}

export default MyApp;

const { publicRuntimeConfig } = getConfig();
MyApp.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {};

  const res = await fetch(`${publicRuntimeConfig.ROOT_API_URL}/navigation`);
  const res2 = await fetch(`${publicRuntimeConfig.ROOT_API_URL}/footer-page`);
  const navigation = await res.json();
  const footer = await res2.json();

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return {
    pageProps,
    navigation,
    footer,
  };
};
MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
