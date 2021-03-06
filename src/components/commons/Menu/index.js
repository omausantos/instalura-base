import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../../../theme/Logo';
import Text from '../../foundation/Text';
import Button from '../Button';
import MenuWrapper from './styles/MenuWrapper';

const links = [
  {
    texto: 'Home',
    url: '/',
  },
  {
    texto: 'Perguntas frequentes',
    url: '/faq',
  },
  {
    texto: 'Sobre',
    url: '/sobre',
  },
];

export default function Menu({ onOpenModal }) {
  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        <Logo />
      </MenuWrapper.LeftSide>
      <MenuWrapper.CentralSide>
        {links.map((link) => (
          <li key={link.url}>
            <Text tag="a" variant="smallestException" href={link.url}>
              {link.texto}
            </Text>
          </li>
        ))}
      </MenuWrapper.CentralSide>
      <MenuWrapper.RightSide>
        <Button ghost variant="secondary.main" href="/app/login">
          Entrar
        </Button>
        <Button variant="primary.main" onClick={onOpenModal}>
          Cadastrar
        </Button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  );
}

Menu.propTypes = {
  onOpenModal: PropTypes.func.isRequired,
};
