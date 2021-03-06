import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../../commons/Footer';
import Menu from '../../commons/Menu';
import Modal from '../../commons/Modal';
import Box from '../../foundation/Box';
import FormCadastro from '../../patterns/FormCadastro';
import { SEO } from '../../commons/SEO';

export const WebsitePageContext = React.createContext({
  toggleModalCadastro: () => {},
});

export default function WebsitePageWrapper({
  seoProps, pageBoxProps, menuProps, children,
}) {
  const [isModalOpen, setModalState] = React.useState(false);
  const cssinline = {
    flex: '1', display: 'flex', flexDirection: 'column', ...pageBoxProps.cssinline,
  };

  return (
    <WebsitePageContext.Provider
      value={{
        toggleModalCadastro: () => {
          setModalState(!isModalOpen);
        },
      }}
    >
      <SEO headTitle={seoProps.headTitle} />

      <Box
        cssinline={cssinline}
      >
        <Modal
          isOpen={isModalOpen}
          onClose={() => {
            setModalState(false);
          }}
        >
          {(propsDoModal) => (
            <FormCadastro propsDoModal={propsDoModal} />
          )}
        </Modal>
        {menuProps.display && (
        <Menu
          onOpenModal={() => setModalState(true)}
        />
        )}

        {children}

        <Footer />
      </Box>
    </WebsitePageContext.Provider>
  );
}

WebsitePageWrapper.defaultProps = {
  seoProps: {},
  pageBoxProps: {
    cssinline: {},
  },
  menuProps: {
    display: true,
  },
};

WebsitePageWrapper.propTypes = {
  seoProps: PropTypes.shape({
    headTitle: PropTypes.string,
  }),
  menuProps: PropTypes.shape({
    display: PropTypes.bool,
  }),
  pageBoxProps: PropTypes.shape({
    cssinline: PropTypes.shape({}),
  }),
  children: PropTypes.node.isRequired,
};
