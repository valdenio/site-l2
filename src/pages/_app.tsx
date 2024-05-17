import '../styles/fonts.css';
import type { AppProps } from 'next/app';
import ReactGa from 'react-ga4';
import { hotjar } from 'react-hotjar';
import { useEffect, useState } from 'react';
import i18next from 'i18next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { defaultLanguage, languages } from '../i18n';
import { GlobalStyle } from '../styles/global';
import Toastr from '../components/organisms/Toastr';
import { Lightning } from '../components/atoms/Lightning';
import Nav from '../components/organisms/Nav';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { asPath, query } = router;
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const isDesktop: boolean = windowWidth > 992;

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  // Detect current language
  const slug = asPath.split('/')[1];
  const langSlug = languages.includes(slug) && slug;
  const language = query.lang || langSlug || defaultLanguage;

  const [clientLanguage, setClientLanguage] = useState<any>(language);

  useEffect(() => {
    setClientLanguage(language);
  }, [language]);

  useEffect(() => {
    ReactGa.initialize('G-6LTJ362RYL');
    ReactGa.send({
      hitType: '',
      page: window.location.pathname + window.location.search,
      title: 'Home',
    });
    // ReactGa.pageview(window.location.pathname + window.location.search);
  }, []);

  useEffect(() => {
    hotjar.initialize(3055225, 6);
    hotjar.identify('USER_ID', { userProperty: 'value' });
    hotjar.event('button-click');
    hotjar.stateChange('/');
  }, []);

  // Don't trigger `i18next.changeLanguage()` on root folder, use `router` to redirect to the specific language
  if (asPath !== '/' && asPath !== '/404') {
    i18next.changeLanguage(clientLanguage);
  }
  const toastrs = [];

  return (
    <>
      <Toastr toastr={toastrs} />
      <Head>
        <meta
          name="description"
          content="Empresa especializada em desenvolvimento web e soluções digitais. Entre em contato pelo email contato@l2code.com.br."
        />
        <title>L2 - Soluções em tecnologia</title>
      </Head>
      <GlobalStyle />
      <Nav />
      <Component {...pageProps} />

      {isDesktop && <Lightning />}
    </>
  );
}

export default MyApp;
