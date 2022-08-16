import React from "react";
import styled from "styled-components";

import { Breakpoint } from "../KittyGrid";
import { COLORS } from "../Theme";

function MarkupTable({ markup }) {
    return <StyledMarkupTable dangerouslySetInnerHTML={{ __html: markup }} />;
}

export default MarkupTable;

const StyledMarkupTable = styled.div`
  padding: 20px 0;
  table {
    width: 100%;
    font-size: 12px;
    ${Breakpoint.md} {
      font-size: 16px;
    }
  }
  tr {
    vertical-align: baseline;
    border: none;
    &:nth-of-type(even) {
      background: ${COLORS.primeLight};
    }
  }
  td {
    outline: none;
    border-spacing: 0;
    border-collapse: unset;
    padding: 13px 0 13px 10px;
    ${Breakpoint.md} {
      padding-left: 60px;
    }
  }
`;