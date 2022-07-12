import { useStaticQuery, graphql } from 'gatsby';

export const useLogosComponent = () => {
    const { wpComponent } = useStaticQuery(graphql`
        {
            wpComponent(databaseId: { eq: 214 }) {
                block {
                    component {
                        ... on WpComponent_Block_Component_LogosComponent {
                            logos {
                                logosItem {
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
