import "normalize.css";
import "../styles/globals.css";
import Head from 'next/head';
import '@fortawesome/fontawesome-free/js/all'


function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.rawgit.com/alpertuna/react-metismenu/master/dist/react-metismenu-standart.min.css"
        />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
