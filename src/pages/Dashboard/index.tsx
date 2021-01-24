import React from 'react';

import { Container } from './styles';

import Header from '../../Components/Header'
import Pokemons from '../Pokemons';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Header />
      <Pokemons />
    </Container>
  )
}

export default Dashboard;
