// libraries
import { useStaticQuery, graphql } from 'gatsby';

export const useHeaderOptionsQuery = () => {
    const data = useStaticQuery(graphql`
        {
            wp {
                acfOptionsHeader {
                    header {
                        fieldGroupName
                    }
                }
            }
        }
    `);

    return {
        header: data.wp.acfOptionsHeader.header,
    };
};
