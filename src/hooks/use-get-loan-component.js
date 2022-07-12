import { useStaticQuery, graphql } from 'gatsby';

export const useGetLoanComponent = () => {
    const { wpComponent } = useStaticQuery(graphql`
        {
            wpComponent(databaseId: { eq: 239 }) {
                block {
                    component {
                        ... on WpComponent_Block_Component_GetloanComponent {
                            title
                            btntitle
                            description
                        }
                    }
                }
            }
        }
    `);

    return wpComponent.block.component[0];
};
