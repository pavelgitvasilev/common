import { useStaticQuery, graphql } from 'gatsby';

export const useOpinionsComponent = () => {
    const { wpComponent } = useStaticQuery(graphql`
        {
            wpComponent(databaseId: { eq: 252 }) {
                block {
                    component {
                        ... on WpComponent_Block_Component_OpinionsComponent {
                            desc
                            fieldGroupName
                            title
                            subtitle
                            rating
                            opinionsItems {
                                text
                                name
                                date
                            }
                        }
                    }
                }
            }
        }
    `);

    return wpComponent.block.component[0];
};
