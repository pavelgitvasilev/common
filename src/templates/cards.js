// libraries
import React, { Fragment } from 'react';
import { graphql } from 'gatsby';
import 'normalize.css';
// components
import Layout from 'components/layout';
import { GlobalStyle } from 'components/UI/GlobalStyle';
import { GlobalGridVars } from 'components/UI/Grid';
// helpers
import { renderBlock } from 'helpers/renderBlock';
// static
import 'assets/css/typography.css';
import { Footer } from 'components/Footer';

const Cards = ({
    data: {
        wpPage: { title, seo, template, components },
    },
}) => {
    return (
        <>
            <GlobalStyle />
            <GlobalGridVars />
            {components.cardcomponents &&
                components.cardcomponents.map((item) => (
                    <Fragment key={item.fieldGroupName}>
                        {renderBlock(item)}
                    </Fragment>
                ))}
            <Footer />
        </>
    );
};

export default Cards;

export const CardQuery = graphql`
    query ($databaseId: Int!) {
        wpPage(databaseId: { eq: $databaseId }) {
            databaseId
            title
            content
            seo {
                fullHead
            }
            template {
                templateName
            }
            components {
                cardcomponents {
                    ... on WpPage_Components_Cardcomponents_Firstblock {
                        fieldGroupName
                        title
                    }
                }
            }
        }
    }
`;
