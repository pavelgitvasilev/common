import { useStaticQuery, graphql } from 'gatsby';

export const useFooterMenu3 = () => {
    const { wpMenu } = useStaticQuery(graphql`
        {
            wpMenu(databaseId: { eq: 5 }) {
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
