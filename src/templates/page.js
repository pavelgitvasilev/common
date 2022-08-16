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

const Page = ({
    data: {
        wpPage: { title, seo, template, isFrontPage, components },
    },
}) => {
    return (
        <>
            {/* <HelmetBlock data={data.wpPage} /> */}
            <GlobalStyle />
            <GlobalGridVars />
            <Layout
                isFrontPage={isFrontPage}
                // scrollHeaderValue={1036}
                template={template.templateName}
            >
                {components.components &&
                    components.components.map((item, index) => (
                        <Fragment key={item.__typename + '_' + index}>{renderBlock(item)}</Fragment>
                    ))}
            </Layout>
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
        }
    }
`;
