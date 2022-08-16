import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

export const BackgroundImage = ({ fluid, children }) => {
    return (
        <StyledBackgroundWrapper>
            <StyledImage fluid={fluid} />
            {children}
        </StyledBackgroundWrapper>
    );
};

const StyledBackgroundWrapper = styled.div`
    position: relative;
`;

const StyledImage = styled(Img)`
    position: absolute !important;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    img {
        margin: 0 !important;
    }
`;
