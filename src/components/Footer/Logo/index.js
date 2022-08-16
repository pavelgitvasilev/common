import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { BREAKPOINT, Col } from 'components/UI/Grid';

export const FooterLogo = ({ logo }) => {
    return (
        <StyledFooterLogo sm={6} as={Link} to="/">
            {logo ? (
                <img src={logo.localFile.publicURL} alt="footer_logo" />
            ) : null}
        </StyledFooterLogo>
    );
};

const StyledFooterLogo = styled(Col)`
    min-width: auto;
    max-width: 60px;
    margin-left: auto;
    order: 2;
    ${BREAKPOINT.lg} {
        margin-left: 0;
        order: 1;
    }

    img {
        display: block;
        margin-left: auto;
    }
`;
