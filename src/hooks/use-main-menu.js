import { useStaticQuery, graphql } from 'gatsby';

export const useMainMenu = () => {
    const { wpMenu } = useStaticQuery(graphql`
        {
            wpMenu(databaseId: { eq: 2 }) {
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
