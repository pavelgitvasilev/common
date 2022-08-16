// libraries
import styled, { css } from 'styled-components';

export const Button = styled.button`
  display: inline-block;
  padding: 13px 11px 12px;
  color: #fff;
  font-size: 14px;
  text-align: center;
  text-decoration: none;
  background-color: #ff9d00;
  border: unset;
  border-radius: 4px;
  outline: none;
  box-shadow: none;
  cursor: pointer;
  transition: 0.3s;
  ${({ variant }) => {
    switch (variant) {
      case 'outlined':
        return css`
          border: 2px solid transparent;
          box-shadow: 0 2px 4px 0 rgb(0 0 0 / 10%);

          &:hover,
          &:active,
          &:focus {
            color: #ff9d00;
            background-color: #fff;
            border-color: #ff9d00;
          }
        `;
      case 'contained':
        return css`
          box-shadow: 0 2px 4px 0 rgb(0 0 0 / 10%);
          opacity: 0.8;

          &:hover,
          &:active,
          &:focus {
            opacity: 1;
          }
        `;
      case 'secondary':
        return css`
          padding: 18px 10px;
          font-weight: 600;
          font-size: 17px;
          text-transform: uppercase;
          background-color: #9edc15;
          border-radius: 14px;

          &:hover,
          &:active,
          &:focus {
            background: linear-gradient(14.28deg, #47cd8b 0, #9edc15 100%);
          }
        `;
      default:
        return css`
          background-color: transparent;

          &:hover,
          &:active,
          &:focus {
            background-color: #ff9d00;
          }
        `;
    }
  }}
`;
