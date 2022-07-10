// libraries
import React, { Fragment, useEffect } from 'react';
import { graphql } from 'gatsby';
// components
// import { SeoHead } from '../components/SEO';
import Layout from '../components/Layout';
// helpers
import { renderBlock } from '../helpers/renderBlock';
// hooks
import { ViewportProvider } from '../hooks/useViewport';
// import { setCookie } from '../hooks/useCookie';

const Page = ({
  data: {
    wpPage: { title, seo, template, isFrontPage, components },
  },
}) => {
  console.log('data: ', data);
  // console.log('data: ', data);
  // useEffect(() => {
  //   if (title === 'Préstamos a Plazos') {
  //     setCookie('specName', 'PLN', {
  //       days: 7,
  //       path: '/',
  //     });
  //     setCookie('productVersion', 'LANDING', {
  //       days: 7,
  //       path: '/',
  //     });
  //   } else {
  //     setCookie('specName', '', {
  //       days: -1,
  //     });
  //     setCookie('productVersion', '', {
  //       days: -1,
  //     });
  //   }
  // });
  return (
    <>
      <ViewportProvider>
        <Layout
          isFrontPage={isFrontPage}
          scrollHeaderValue={1036}
          template={template.templateName}
        >
          {components.components &&
            components.components.map((item, index) => (
              <Fragment key={item.fieldGroupName + index}>
                {renderBlock(item)}
              </Fragment>
            ))}
        </Layout>
      </ViewportProvider>
    </>
  );
};

export default Page;

export const pageQuery = graphql`
  query($databaseId: Int!) {
    wpPage(databaseId: { eq: $databaseId }) {
      databaseId
      template {
        templateName
      }
      components {
        components {
          ... on WpPage_Components_Components_Test {
            fieldGroupName
            ...Test
          }
        }
      }
    }
  }
`;
