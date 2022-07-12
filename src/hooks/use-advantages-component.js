import { useStaticQuery, graphql } from 'gatsby';

export const useAdvantagesComponent = () => {
    const { wpComponent } = useStaticQuery(graphql`
        {
            wpComponent(databaseId: { eq: 215 }) {
                block {
                    component {
                        ... on WpComponent_Block_Component_AdvantagesComponent {
                            fieldGroupName
                            title
                            advantagesItems {
                                title
                                img {
                                    localFile {
                                        publicURL
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    `);

    return wpComponent.block.component[0];
};
