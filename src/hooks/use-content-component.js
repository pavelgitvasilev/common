import { useStaticQuery, graphql } from 'gatsby';

export const useContentComponent = () => {
    const { wpPage } = useStaticQuery(graphql`
        {
            wpPage(databaseId: { eq: 178 }) {
                content
            }
        }
    `);
    return wpPage;
};
