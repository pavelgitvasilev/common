import React, { useEffect, useState } from 'react';

import 'assets/css/typography.css';
import { Footer } from 'components/Footer';

// import Header from "./Header";

const Layout = ({ children, isFrontPage, scrollHeaderValue, template }) => {
    return (
        <>
            {/* <Header
                scrollPosition={scrollPosition}
                scrollHeaderValue={scrollHeaderValue}
                isFrontPage={isFrontPage}
                template={template}
                showNotification={showNotification}
            /> */}
            <main>{children}</main>
            <Footer isFrontPage={isFrontPage} />
        </>
    );
};

export default Layout;
