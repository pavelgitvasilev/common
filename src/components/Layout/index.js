// libraries
import React from 'react';
import 'normalize.css';
// components
import GlobalStyles from '../UI/GlobalStyles';
// import { Header } from '../Header';
// import { Footer } from '../Footer';
// import { NotificationWindow } from '../NotificationWindow';
// import { AppBanner } from '../AppBanner';
// hooks
// import { useScrollPosition } from '../../hooks/useScrollPosition';
// import { useLocalStorage } from '../../hooks/useLocalStorage';

const Layout = ({ children, isFrontPage, scrollHeaderValue, template }) => {
  // const scrollPosition = useScrollPosition();
  // const [showPopover, setShowPopover] = useLocalStorage('showPopover', true);

  // const handleClosePopover = () => {
  //   setShowPopover(false);
  // };

  return (
    <>
      <GlobalStyles />
      {/* {isFrontPage && showPopover && (
        <NotificationWindow
          scrollPosition={scrollPosition}
          closePopover={handleClosePopover}
        />
      )} */}
      {/* <Header
        scrollPosition={scrollPosition}
        scrollHeaderValue={scrollHeaderValue}
        isFrontPage={isFrontPage}
        template={template}
        showPopover={showPopover}
      /> */}
      <main>{children}</main>
      {/* <Footer isFrontPage={isFrontPage} /> */}
      {/* <AppBanner /> */}
    </>
  );
};

export default Layout;
