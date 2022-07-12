import React, { useEffect } from 'react';
import { graphql } from 'gatsby';
import { SETTINGS } from '../settings';
import { checkAvailability } from '../helpers/checkAvailability';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/index.css';

import { HelmetBlock } from '../components/HelmetBlock';
import { setCookiesFromUrlParams } from '../helpers/setCookies';
import { Header } from '../components/HeaderBlock';
import { renderBlock } from '../helpers/renderBlock';
import { Footer } from '../components/FooterBlock';

const Page = ({ data }) => {
    const components = data.wpPage.components.components;
    const pageID = data.wpPage.databaseId;
    const regPages = SETTINGS.REG_PAGES;

    const HEADER = checkAvailability(regPages, pageID) ? null : <Header />;
    const FOOTER = checkAvailability(regPages, pageID) ? null : <Footer />;

    useEffect(() => {
        //set get parameters to cookies
        setCookiesFromUrlParams();
    });

    return (
        <>
            <HelmetBlock data={data.wpPage} />
            {HEADER}
            {components &&
                components.map((item, index) =>
                    item ? <section key={item.__typename + '_' + index}>{renderBlock(item)}</section> : null
                )}
            {FOOTER}
        </>
    );
};

export default Page;

export const pageQuery = graphql`
    query ($databaseId: Int!) {
        wpPage(databaseId: { eq: $databaseId }) {
            databaseId
            uri
            title
            isFrontPage
            seo {
                title
                metaDesc
            }
            template {
                templateName
            }
            components {
                components {
                    ... on WpPage_Components_Components_Banner {
                        __typename
                    }
                    ... on WpPage_Components_Components_Logos {
                        __typename
                    }
                    ... on WpPage_Components_Components_Advantages {
                        __typename
                    }
                    ... on WpPage_Components_Components_Opinions {
                        __typename
                    }
                    ... on WpPage_Components_Components_Hiw {
                        __typename
                    }
                    ... on WpPage_Components_Components_Getloan {
                        __typename
                    }
                    ... on WpPage_Components_Components_Title {
                        __typename
                        ...TitleBlock
                    }
                    ... on WpPage_Components_Components_Content {
                        __typename
                        ...ContentBlock
                    }
                    ... on WpPage_Components_Components_Quiz {
                        __typename
                        ...Steps
                    }
                }
            }
        }
    }
`;
