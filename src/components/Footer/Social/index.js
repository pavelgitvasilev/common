import React from 'react';
import styled from 'styled-components';

import { Col, BREAKPOINT } from 'components/UI/Grid';
import { useViewport } from 'hooks/useViewport';

export const FooterSocial = ({ social }) => {
    return (
        <StyledFooterSocial sm={6}>
            {social
                ? social.map((item, index) => (
                      <a
                          key={item.fieldGroupName + '_' + index}
                          href={item.url}
                      >
                          <StyledSocialIcon
                              src={item.icon.localFile.publicURL}
                              alt={item.label}
                          ></StyledSocialIcon>
                      </a>
                  ))
                : null}
        </StyledFooterSocial>
    );
};

const StyledFooterSocial = styled(Col)`
    /* width: 100%; */
    max-width: 130px;
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    order: 3;
    ${BREAKPOINT.lg} {
    }
`;

const StyledSocialIcon = styled.img`
    margin-top: auto;
    ${BREAKPOINT.lg} {
        margin-top: 0;
    }
`;
