import styled, { css } from "styled-components";
import { COLORS } from "../Theme";

const Typography = styled.div`
  margin: ${({ hasMargin }) => (hasMargin ? "15px 0" : "0")};
  color: ${({ color }) => (color ? color : COLORS.black)};
  ${({ align }) =>
        align &&
        css`
      text-align: ${align};
    `}
`;

export default Typography;