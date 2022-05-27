import type { NextPage } from 'next';
import Cases from '../../components/organisms/Cases';
import OurServicesOnePage from '../../components/organisms/OurServicesOnePage';
import OurCustomers from '../../components/organisms/OurCustomers';
import { useEffect } from 'react';
import Footer from '../../components/organisms/Footer';
import Header from '../../components/organisms/Header/index';
import Nav from '../../components/organisms/NavOnePage/index';

const Home: NextPage = () => {

  // make page refresh on top
  useEffect(() => {
    if (history.scrollRestoration) {
      history.scrollRestoration = 'manual';
    } else {
      window.onbeforeunload = function () {
        window.scrollTo(0, 0);
      }
    }
  });

  return (
    <>
      <Nav />
      <Header />
      <OurServicesOnePage />
      <Cases />
      <OurCustomers />
      <Footer />
    </>
  );
};

export default Home;

