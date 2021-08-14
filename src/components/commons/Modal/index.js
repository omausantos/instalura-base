import React from 'react';
import styled, { createGlobalStyle, css } from 'styled-components';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background: rgba(0,0,0,0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  overflow: scroll;
  transition: .3s;
  z-index: 100;
  overflow-x: hidden;

  ${({ isOpen }) => {
    if (isOpen) {
      return css`
            opacity: 1;
            pointer-events: all;
        `;
    }
    return css`
            opacity: 0;
            pointer-events: none;
      `;
  }}
`;

const LockScroll = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;

function Modal({ isOpen, children, onClose }) {
  return (
    <ModalWrapper
      isOpen={isOpen}
      onClick={(event) => {
        const isSafeArea = event.target.closest('[data-modal-safe-area="true"]');
        if (!isSafeArea) {
          onClose();
        }
      }}
    >
      {isOpen && <LockScroll />}
      <motion.div
        style={{
          flex: '1',
          display: 'flex',
          transition: '0.8s cubic-bezier(0.42, 0, 0.11, 1.29)',
          justifyContent: 'flex-end',
        }}
        variants={{
          open: {
            x: '0',
          },
          close: {
            x: '100%',
          },
        }}
        animate={isOpen ? 'open' : 'close'}
      >
        {children({
          'data-modal-safe-area': 'true',
          onClose,
        })}
      </motion.div>
    </ModalWrapper>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
