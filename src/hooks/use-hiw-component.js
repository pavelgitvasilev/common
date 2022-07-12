import { useStaticQuery, graphql } from 'gatsby';

export const useHiwComponent = () => {
    const { wpComponent } = useStaticQuery(graphql`
        {
            wpComponent(databaseId: { eq: 227 }) {
                block {
                    component {
                        ... on WpComponent_Block_Component_HiwComponent {
                            fieldGroupName
                            title
                            hiwItems {
                                title
                                description
                                int
                            }
                        }
                    }
                }
            }
        }
    `);

    return wpComponent.block.component[0];
};
