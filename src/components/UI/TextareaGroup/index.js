import React from 'react';
import styled from 'styled-components';
import { InputLabel } from '../core/InputLabel';
import { Textarea } from '../core/Textarea';

export const TextareaGroup = React.forwardRef(
  ({ label, name, ...props }, ref) => {
    return (
      <StyledTextareaGroup>
        {label && <InputLabel htmlFor={name}>{label}</InputLabel>}
        <Textarea name={name} ref={ref} {...props} />
      </StyledTextareaGroup>
    );
  }
);

const StyledTextareaGroup = styled.div`
  padding-bottom: 20px;
`;
