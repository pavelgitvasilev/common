import React from "react";
import styled, { css } from "styled-components";

import { COLORS } from "../Theme";

import checkIcon from "../../../images/svg-icons/checkboxChecked.svg";

const Checkbox = React.forwardRef(({ children, error, ...props }, ref) => {
    return (
        <StyledCheckbox error={error}>
            <input type="checkbox" ref={ref} {...props} />
            {children}
        </StyledCheckbox>
    );
});

export default Checkbox;

const StyledCheckbox = styled.label`
  position: relative;
  display: inline-flex;
  align-items: flex-start;
  padding: 4px 0;
  > input[type="checkbox"] {
    flex-shrink: 0;
    width: 20px;
    height: 20px;
    margin-top: 0;
    margin-right: 10px;
    border: 1px solid ${COLORS.prime};
    border-radius: 2px;
    opacity: 0.3;
    appearance: none;
    :checked {
      opacity: 1;
      background-color: ${COLORS.prime};
      background-image: url(${checkIcon});
      background-repeat: no-repeat;
      background-size: 75%;
      background-position: center;
    }
    ${({ error }) =>
        error &&
        css`
        border-color: ${COLORS.red};
      `}
  }
`;