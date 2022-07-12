import { useStaticQuery, graphql } from 'gatsby';

export const useFooterMenu2 = () => {
    const { wpMenu } = useStaticQuery(graphql`
        {
            wpMenu(databaseId: { eq: 4 }) {
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
