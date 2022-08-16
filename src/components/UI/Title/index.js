import React from "react";
import styled, { css } from "styled-components";

import Typography from "../Typography";
import { Breakpoint } from "../KittyGrid";

const Title = ({ children, variant, ...props }) => {
    return (
        <StyledTitle variant={variant} {...props}>
            {children}
        </StyledTitle>
    );
};

export default Title;

const StyledTitle = styled(Typography)`
  font-weight: 700;
  line-height: 1.25;
  ${({ variant }) => {
        switch (variant) {
            case "h1":
                return css`
          font-size: 36px;
          ${Breakpoint.md} {
            font-size: 48px;
          }
        `;
            case "h2":
                return css`
          font-size: 32px;
          ${Breakpoint.md} {
            font-size: 48px;
          }
        `;
            case "h3":
                return css`
          font-size: 26px;
          ${Breakpoint.md} {
            font-size: 36px;
          }
        `;
            case "h4":
                return css`
          font-size: 20px;
          ${Breakpoint.md} {
            font-size: 24px;
          }
        `;
            default:
                return css`
          font-size: 36px;
          ${Breakpoint.md} {
            font-size: 48px;
          }
        `;
        }
    }};
`;
Footer
