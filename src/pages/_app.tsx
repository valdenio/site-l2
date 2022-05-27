import { GlobalStyle } from '../styles/global';
import '../styles/fonts.css';
import type { AppProps } from 'next/app';
// import Footer from '../components/organisms/Footer/index';
// import Header from '../components/organisms/Header/index';
// import Nav from '../components/organisms/NavOnePage/index';

import '../i18n'
import { useEffect, useState } from 'react'
import i18next from 'i18next'
import { defaultLanguage, languages } from '../i18n'
import { useRouter } from 'next/router'
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const { asPath, query } = router

  // Detect current language
  const slug = asPath.split('/')[1]
  const langSlug = languages.includes(slug) && slug
  const language = query.lang || langSlug || defaultLanguage

  const [clientLanguage, setClientLanguage] = useState<any>(language)

  useEffect(() => {
    setClientLanguage(language)
  }, [language])

  // Don't trigger `i18next.changeLanguage()` on root folder, use `router` to redirect to the specific language
  if (asPath !== '/' && asPath !== '/404') {
    i18next.changeLanguage(clientLanguage)
  }

  return (
    <>
    <Head>
        {/* Google Tag Manager */}
        <script 
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-P2868RZ');`,
          }}
        />
        {/* End Google Tag Manager */}
      </Head>

      {/* Google Tag Manager (noscript) */}
      <noscript 
        dangerouslySetInnerHTML={{ 
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P2868RZ" height="0" width="0" style="display:none;visibility:hidden"></iframe>`
        }}
      />
      {/* End Google Tag Manager (noscript) */}
      <GlobalStyle />
      {/* <Nav /> */}
      {/* <Header /> */}
      <Component {...pageProps} />
      {/* <Footer /> */}
    </>
  );
}

export default MyApp;
