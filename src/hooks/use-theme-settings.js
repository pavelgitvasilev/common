import { useStaticQuery, graphql } from 'gatsby';

export const useThemeSettings = () => {
    const data = useStaticQuery(graphql`
        {
            wp {
                acfOptionsHeader {
                    header {
                        workTime
                        phoneNumber
                        loginText
                        logo {
                            localFile {
                                publicURL
                            }
                        }
                    }
                }
                acfOptionsFooter {
                    footer {
                        footerLogo {
                            url
                            openInNewTab
                            svgIco {
                                localFile {
                                    publicURL
                                }
                            }
                        }
                    }
                }
            }
        }
    `);

    return {
        acfOptionsHeader: data.wp.acfOptionsHeader.header,
        acfOptionsFooter: data.wp.acfOptionsFooter.footer,
    };
};
