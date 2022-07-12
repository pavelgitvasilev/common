import { useStaticQuery, graphql } from 'gatsby';

export const useBannerComponent = () => {
    const { wpComponent } = useStaticQuery(graphql`
        {
            wpComponent(databaseId: { eq: 201 }) {
                block {
                    component {
                        ... on WpComponent_Block_Component_BannerComponent {
                            buttonText
                            fieldGroupName
                            title
                            subtitle
                            bannerImage {
                                localFile {
                                    publicURL
                                }
                            }
                            bannerDescription {
                                title
                            }
                        }
                    }
                }
            }
        }
    `);

    return wpComponent.block.component[0];
};
