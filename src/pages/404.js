import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/index.css';

import { HelmetBlock } from '../components/HelmetBlock';
import { Header } from '../components/HeaderBlock';

const NotFoundPage = () => {
    const seoData = {
        title: '404',
        databaseId: null,
        seo: {
            title: 'Page not found - Plazo',
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
