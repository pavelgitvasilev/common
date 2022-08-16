import styled from 'styled-components';
import SelectDropdown from '../../../../assets/images/svg-icons/select-dropdown.svg';

export const Select = styled.select`
  width: 100%;
  height: 40px;
  padding: 0 23px;
  overflow: hidden;
  color: #4c4c4c;
  font-size: 16px;
  white-space: nowrap;
  text-overflow: ellipsis;
  background: #fff url(${SelectDropdown}) no-repeat 100% 50%;
  border: none;
  border-radius: 4px;
  outline: 0;
  box-shadow: inset 0 1px 3px 0 rgb(0 0 0 / 20%);
  appearance: none;
`;
