import React from 'react';
import styled, { css } from 'styled-components';

import Typography from 'components/UI/Typography';
import { BREAKPOINT } from 'components/UI/Grid';

const Text = ({ children, variant, ...props }) => {
    return (
        <StyledText variant={variant} {...props}>
            {children}
        </StyledText>
    );
};

export default Text;

const StyledText = styled(Typography)`
    ${({ variant }) => {
        switch (variant) {
            case 'text1':
                return css`
                    font-size: 18px;
                    ${BREAKPOINT.md} {
                        font-size: 28px;
                    }
                `;
            case 'text2':
                return css`
                    font-size: 14px;
                    ${BREAKPOINT.md} {
                        font-size: 20px;
                    }
                `;
            case 'text3':
                return css`
                    font-size: 14px;
                    ${BREAKPOINT.md} {
                        font-size: 18px;
                    }
                `;
            case 'text4':
                return css`
                    font-size: 14px;
                    ${BREAKPOINT.md} {
                        font-size: 16px;
                    }
                `;
            case 'text5':
                return css`
                    font-size: 12px;
                    ${BREAKPOINT.md} {
                        font-size: 14px;
                    }
                `;
            default:
                return css`
                    font-size: 18px;
                `;
        }
    }}
`;
