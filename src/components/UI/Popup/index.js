// libraries
import React from 'react';
import styled from 'styled-components';

export const Popup = ({ children, isOpen, onClose }) => {
  return (
    isOpen && (
      <StyledPopupOverlay tabIndex="-1" onClick={() => onClose()}>
        <StyledPopupContainer
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-content"
          onClick={(e) => e.stopPropagation()}
        >
          <StyledClosePopup onClick={onClose}>+</StyledClosePopup>
          <main>{children}</main>
        </StyledPopupContainer>
      </StyledPopupOverlay>
    )
  );
};

const StyledPopupOverlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(0 0 0 / 60%);
`;

const StyledPopupContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  max-width: 660px;
  max-height: 100vh;
  padding: 30px;
  overflow-y: auto;
  background-color: #fff;
  border-radius: 4px;
`;

const StyledClosePopup = styled.button`
  position: absolute;
  top: 6px;
  right: 20px;
  color: #4c4c4c;
  font-size: 42px;
  background: none;
  border: none;
  transform: rotate(45deg);
  cursor: pointer;
`;
