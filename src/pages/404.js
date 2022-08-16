import React from 'react';

// import 'bootstrap/dist/css/bootstrap.min.css';
import 'assets/css/typography.css';

import { HelmetBlock } from 'components/Helmet';
import { Header } from 'components/Header';

const NotFoundPage = () => {
    const seoData = {
        title: '404',
        databaseId: null,
        seo: {
            title: 'Page not found - Status-leasing',
        },
    };

    return (
        <>
            <HelmetBlock data={seoData} />
            <Header />
        </>
    );
};

export default NotFoundPage;
