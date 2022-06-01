import type { NextPage } from 'next';
import { useEffect } from 'react';
import AllCasesPage from '../../../components/organisms/AllCasesPage';
import Menu from '../../../components/organisms/Menu';

const AllCases: NextPage = () => {
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
      {/*<Menu openMenu={true} closeMenu = {() => (false)}/>*/}
      <AllCasesPage />
    </>
  );
};

export default AllCases;