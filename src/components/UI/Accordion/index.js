// libraries
import React, { useState } from 'react';
import styled from 'styled-components';
// components
import { Breakpoint } from '../Grid';
import { TextWysiwyg } from '../TextWysiwyg';
// static
import ArrowAccordion from '../../../assets/images/svg-icons/accordionArrow.svg';

export const AccordionItem = (props) => {
  const { title, description } = props;
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <StyleAccordionItem>
      <StyledTitle
        arrowIco={ArrowAccordion}
        onClick={toggleAccordion}
        isOpen={isOpen}
      >
        {title}
      </StyledTitle>
      <StyledDescription
        isOpen={isOpen}
        dangerouslySetInnerHTML={{
          __html: description,
        }}
      />
    </StyleAccordionItem>
  );
};

const StyledTitle = styled.h3`
  position: relative;
  display: inline-block;
  margin: 0;
  padding: 0 0 10px 25px;
  color: #9edc15;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: -0.4px;
  cursor: pointer;
  transition: 0.3s;
  ${Breakpoint.md} {
    font-size: 20px;
    letter-spacing: -0.8px;
  }

  &:hover {
    text-decoration: underline;
  }

  &::before {
    position: absolute;
    top: 4px;
    left: 0;
    display: block;
    width: 8px;
    height: 14px;
    background-image: url(${(props) => props.arrowIco});
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: contain;
    transform: rotate(${(props) => (props.isOpen ? '90deg' : '0')});
    transition: 0.3s;
    content: '';
    ${Breakpoint.md} {
      top: 5px;
    }
  }
`;

const StyleAccordionItem = styled.div`
  margin-bottom: 15px;
  ${Breakpoint.md} {
    margin-bottom: 20px;
  }
`;

const StyledDescription = styled(TextWysiwyg)`
  height: ${(props) => (props.isOpen ? '100%' : '0')};
  padding-left: 25px;
  overflow: hidden;
  color: #4c4c4c;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.67;
  letter-spacing: -1px;
  transition: height 0.2s ease-out;
  ${Breakpoint.md} {
    font-size: 18px;
  }

  /* stylelint-disable */
  .video__wrapper {
    position: relative;
    height: 0;
    padding-bottom: 56.25%;
    /* stylelint-enable */
    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
`;
