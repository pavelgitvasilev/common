import React from "react";
import styled, { css } from "styled-components";

import { COLORS } from "../Theme";
import Text from "../Text";

import checkIcon from "../../../images/svg-icons/listCheck.svg";

const List = ({ items, listVariant, textVariant, color }) => {
    return (
        <StyledList>
            {items.map((item, index) => (
                <StyledListItem
                    key={index}
                    forwardedAs="li"
                    dangerouslySetInnerHTML={{ __html: item }}
                    listVariant={listVariant}
                    color={color}
                    variant={textVariant}
                />
            ))}
        </StyledList>
    );
};

export default List;

const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding-left: 0;
`;

const StyledListItem = styled(Text)`
  margin-bottom: 8px;
  :last-child {
    margin-bottom: 0;
  }
  ${({ listVariant }) => {
        switch (listVariant) {
            case "info":
                return css`
          position: relative;
          padding-left: 20px;
          &:before {
            content: "";
            position: absolute;
            left: 0;
            top: 0.42em;
            width: 0.35em;
            height: 0.35em;
            border-radius: 50%;
            background: ${COLORS.prime};
          }
        `;
            case "checked":
                return css`
          position: relative;
          padding-left: 20px;
          &:before {
            content: "";
            position: absolute;
            left: 0;
            top: 0.2em;
            width: 0.78em;
            height: 0.78em;
            background-image: url(${checkIcon});
            background-repeat: no-repeat;
            background-size: contain;
          }
        `;
            default:
                return css`
          list-style-type: initial;
        `;
        }
    }}
`;