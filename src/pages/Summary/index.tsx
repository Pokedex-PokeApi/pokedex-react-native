import React, { useCallback } from 'react';
import { Animated, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/core';


import { Container, Button, Info, Name, Types, Type, TypeText, InfoImage, NumberResgister, PokemonImageContainer, PokemonImage } from './styles';

interface IPropsSumary {
  afterThirdCard: boolean;
  rightCard: boolean;
  translateY: Animated.Value;
  pokemon: {
    id: number;
    name: string;
    description: string;
    image: string;
    genera: string;
    pokedex_number: string;
    base_experience: number;
    types: [
      {
        name: string;
        url: string;
      }
    ],
    stats: [
      {
        base_stat: number;
        name: string;
        url: string;
      }
    ],
    height: number;
    weight: number;
    abilites: [
      {
        name: string;
        url: string;
      }
    ],
    gender_rate: number;
    egg_groups: [
      {
        name: string;
        url: string;
      }
    ]
  }
}

const Summary: React.FC<IPropsSumary> = ({
  pokemon, translateY, rightCard, afterThirdCard
}: IPropsSumary) => {
  const navigation = useNavigation();


  const pokemonImageContainerStyle = {
    opacity: translateY.interpolate({
      inputRange: [-100, 0],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    }),
    transform: [
      {
        translateY: translateY.interpolate({
          inputRange: [-100, 0, 200],
          outputRange: [-20, 0, 25],
          extrapolate: 'clamp',
        }),
      },
      {
        scale: translateY.interpolate({
          inputRange: [-100, 0, 200],
          outputRange: [0.9, 1, 1.1],
          extrapolate: 'clamp',
        }),
      },
    ],
  };

  const handleNavigateToPokemon = useCallback(() => {
    navigation.navigate('Pokemon', {
      pokemon,
      from: 'Dashboard',
    });
  }, [navigation, pokemon]);

  return (
    <Container>
      <Button
        type_pokemon={pokemon.types[0].name}
        afterThirdCard={afterThirdCard}
        rightCard={rightCard}
        onPress={() => handleNavigateToPokemon()}
      >
        <Info>
          <Name>{pokemon.name}</Name>
          <Types>
            {pokemon.types.map(type => (
              <Type key={type.url}>
                <TypeText>{type.name}</TypeText>
              </Type>
            ))}
          </Types>
        </Info>
        <InfoImage>
          <NumberResgister>{pokemon.pokedex_number}</NumberResgister>
          <PokemonImageContainer style={pokemonImageContainerStyle}>
            <PokemonImage source={{ uri: pokemon.image }} />
          </PokemonImageContainer>
        </InfoImage>
      </Button>
    </Container >
  )
}

export default Summary;
