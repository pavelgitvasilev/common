import React from 'react';
import styled from 'styled-components';
import { Select } from '../core/Select';
import { InputLabel } from '../core/InputLabel';

export const SelectGroup = React.forwardRef(
  ({ label, options, name, errorMessage, ...props }, ref) => {
    return (
      <StyledSelectGroup>
        {label && <InputLabel htmlFor={name}>{label}</InputLabel>}
        <Select ref={ref} name={name} {...props}>
          {options.map((value) => (
            <option key={value} value={value !== '---' ? value : ''}>
              {value}
            </option>
          ))}
        </Select>
        {errorMessage && <StyledErrorMsg>{errorMessage}</StyledErrorMsg>}
      </StyledSelectGroup>
    );
  }
);

const StyledSelectGroup = styled.div`
  padding-bottom: 20px;
`;

const StyledErrorMsg = styled.span`
  display: block;
  padding-top: 10px;
  color: #dc3232;
  font-weight: normal;
  font-size: 1em;
`;
