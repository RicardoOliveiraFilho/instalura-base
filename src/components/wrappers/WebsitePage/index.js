import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

import SEO from '../../commons/SEO';
import Box from '../../foundation/layout/Box';
import Modal from '../../commons/Modal';
import FormCadastro from '../../patterns/FormCadastro';
import Menu from '../../commons/Menu';
import Footer from '../../commons/Footer';

export const WebsitePageContext = createContext({
  toggleModalCadastro: () => {},
});

export default function WebsitePageWrapper({
  children,
  seoProps,
  pageBoxProps,
  menuProps,
}) {
  const [isModalOpen, setModalState] = useState(false);

  return (
    <WebsitePageContext.Provider
      value={{
        toggleModalCadastro: () => {
          setModalState(!isModalOpen);
        },
      }}
    >
      <SEO {...seoProps} />

      <Box display="flex" flex="1" flexDirection="column" {...pageBoxProps}>
        <Modal
          isOpen={isModalOpen}
          onClose={() => {
            setModalState(false);
          }}
        >
          {propsDoModal => <FormCadastro propsDoModal={propsDoModal} />}
        </Modal>
        {menuProps.display && (
          <Menu onCadastrarClick={() => setModalState(true)} />
        )}
        {children}
        <Footer color="quaternary.subTitle" />
      </Box>
    </WebsitePageContext.Provider>
  );
}

WebsitePageWrapper.defaultProps = {
  seoProps: {},
  pageBoxProps: {},
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
    backgroundImage: PropTypes.string,
    backgroundRepeat: PropTypes.string,
    backgroundPosition: PropTypes.string,
  }),
  children: PropTypes.node.isRequired,
};
