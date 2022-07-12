import { useStaticQuery, graphql } from 'gatsby';

export const useFooterMenu1 = () => {
    const { wpMenu } = useStaticQuery(graphql`
        {
            wpMenu(databaseId: { eq: 3 }) {
                name
                menuItems {
                    nodes {
                        url
                        label
                        databaseId
                    }
                }
            }
        }
    `);

    return wpMenu.menuItems.nodes;
};
