import React from 'react';
import styled, { css } from 'styled-components';
import { useFooterOptionsQuery } from 'hooks/useFooterOptionsQuery';

import { useViewport } from 'hooks/useViewport';
import { BREAKPOINT, Col, Container, Row } from 'components/UI/Grid';
import Text from 'components/UI/Text';
import { COLORS } from 'components/UI/Theme';

import { FooterContacts } from 'components/Footer/Contacts';
import { FooterLogo } from 'components/Footer/Logo';
import { FooterSocial } from 'components/Footer/Social';

export const Footer = ({ isFrontPage }) => {
    const { width } = useViewport();
    const {
        footer: { copyright, social, contacts, logo },
    } = useFooterOptionsQuery();

    return (
        <StyledFooterBlock>
            <Container>
                <Row>
                    <FooterContacts contacts={contacts} />
                    <FooterLogo logo={logo} />
                </Row>
                <Row>
                    <FooterSocial social={social} />
                    <StyledFooterCopyright sm={6}>
                        <StyledFooterCopyrightText
                            variant="text4"
                            dangerouslySetInnerHTML={{
                                __html: copyright,
                            }}
                        />
                    </StyledFooterCopyright>
                </Row>
            </Container>
        </StyledFooterBlock>
    );
};

const StyledFooterBlock = styled.footer`
    padding-top: 20px;
    padding-bottom: 25px;
    background: #3c3c3b;
    ${BREAKPOINT.lg} {
        padding-top: 10px;
        padding-bottom: 10px;
    }
`;

const StyledFooterSocialBlock = styled(Col)`
    display: flex;
    order: 3;
    ${BREAKPOINT.lg} {
        width: auto;
    }
`;

const StyledFooterCopyright = styled(Col)`
    order: 4;
`;

const StyledFooterCopyrightText = styled(Text)`
    font-family: 'Roboto';
    display: block;
    font-size: 14px;
    line-height: 141%;
    font-weight: 300;
    color: ${COLORS.greyLight};
    margin: auto;
    margin-right: 0;
    margin-top: 16px;
    text-align: end;

    ${BREAKPOINT.lg} {
        margin: 0;
        margin-right: 0;
        margin-top: 0;
    }
`;
