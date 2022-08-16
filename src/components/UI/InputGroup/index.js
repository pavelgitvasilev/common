import React from 'react';
import styled from 'styled-components';
import { InputLabel } from '../core/InputLabel';
import { Input } from '../core/Input';

export const InputGroup = React.forwardRef(
  ({ label, name, errorMessage, ...props }, ref) => {
    return (
      <StyledInputGroup>
        {label && <InputLabel htmlFor={name}>{label}</InputLabel>}
        <Input
          ref={ref}
          name={name}
          aria-invalid={errorMessage ? 'true' : 'false'}
          {...props}
        />
        {errorMessage && <StyledErrorMsg>{errorMessage}</StyledErrorMsg>}
      </StyledInputGroup>
    );
  }
);

const StyledInputGroup = styled.div`
  padding-bottom: 20px;
`;

const StyledErrorMsg = styled.span`
  display: block;
  padding-top: 10px;
  color: #dc3232;
  font-weight: normal;
  font-size: 1em;
`;
