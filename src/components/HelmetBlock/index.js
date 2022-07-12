import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

export const HelmetBlock = ({ data }) => {
    const { databaseId, seo, title } = data;

    // const isNotFound = databaseId === null;
    const helmetTitle = seo.title ? seo.title : title + ' - Plazo';
    let url = null;

    useEffect(() => {
        url = window.location.href;
    });

    return (
        <Helmet>
            <title>{helmetTitle}</title>
            {seo.metadesc && <meta name="description" content={seo.metadesc} />}

            <meta name="robots" content="noindex,follow" />

            <link rel="canonical" href={url} />
            <meta property="og:title" content={helmetTitle} />
            <meta property="og:type" content="website" />
            {seo.metadesc && <meta property="og:description" content={seo.metadesc} />}
            <meta property="og:url" content={url} />
            <meta property="og:site_name" content="Plazo.com.mx" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={helmetTitle} />
            {seo.metadesc && <meta property="twitter:description" content={seo.metadesc} />}
            <link rel="preconnect" href="//connect.facebook.net" />
            <link rel="preconnect" href="//www.google.com" />
            <link rel="preconnect" href="//www.google-analytics.com" />
        </Helmet>
    );
};
