import React from 'react';

import { Container, Pokedex } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Pokedex>Pokedex</Pokedex>
    </Container>
  );
}

export default Header;