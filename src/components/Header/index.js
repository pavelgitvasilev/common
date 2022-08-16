import React from 'react';
import styled, { css } from 'styled-components';
import { useHeaderOptionsQuery } from 'hooks/useHeaderOptionsQuery';
import { useViewport } from 'hooks/useViewport';
import { BREAKPOINT, Col, Container, Row } from 'components/UI/Grid';

export const Header = ({ isFrontPage }) => {
    const { width } = useViewport();
    const {
        header: { title },
    } = useHeaderOptionsQuery();

    return (
        <StyledHeaderBlock>
            <Container>{title}</Container>
        </StyledHeaderBlock>
    );
};

const StyledHeaderBlock = styled.header``;
