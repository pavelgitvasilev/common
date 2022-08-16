// libraries
import { useStaticQuery, graphql } from 'gatsby';

export const useFooterOptionsQuery = () => {
    const data = useStaticQuery(graphql`
        {
            wp {
                acfOptionsFooter {
                    footer {
                        fieldGroupName
                        copyright
                        social {
                            url
                            label
                            icon {
                                localFile {
                                    publicURL
                                }
                            }
                            fieldGroupName
                        }
                        contacts {
                            map
                            fieldGroupName
                            phone {
                                number
                                fieldGroupName
                            }
                        }
                        logo {
                            localFile {
                                publicURL
                            }
                        }
                    }
                }
            }
        }
    `);

    return {
        footer: data.wp.acfOptionsFooter.footer,
    };
};
