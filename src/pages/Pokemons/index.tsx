import React, { useRef, useState, useEffect, useCallback, useMemo } from 'react';
import { Animated, Alert, ActivityIndicator } from 'react-native';

import { API_OFFSET } from '../../constants';

import api from '../../services/api';

import Summary from '../Summary';

import { Container, PokemonListContainer } from './styles';

const Pokemons: React.FC = () => {
  const pokemonListRef = useRef(null);
  const [pokemons, setPokemons] = useState([]);
  const [offset, setOffset] = useState(0);
  const [counter, setCounter] = useState(1);
  const [loadingInitalData, setLoadingInitialData] = useState(true);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);


  const opacity = useMemo(() => new Animated.Value(0), []);
  const translateY = useMemo(() => new Animated.Value(50), []);

  const loadPokemons = useCallback(async (offsetValue = offset, shouldRefresh = false) => {
    try {
      setLoading(true);

      const response = await api.get('pokemons', {
        params: {
          offset: offsetValue,
        },
      });

      const { data } = response;

      if (loadingInitalData) {
        setLoadingInitialData(false);
      }

      setPokemons(shouldRefresh ? data : [...pokemons, ...data]);
      setOffset(shouldRefresh ? API_OFFSET : API_OFFSET * counter);
      setCounter(shouldRefresh ? 2 : counter + 1);
      setLoading(false);

      Animated.parallel([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 600,
          useNativeDriver: true,
        }),

        Animated.timing(translateY, {
          toValue: 0,
          duration: 700,
          useNativeDriver: true,
        }),
      ]).start();
    } catch (err) {
      Alert.alert('Fail to get Pokémons', 'An error has ocurred when try to load the Pokémons, please try again.',
      );
    }
  },
    [pokemons, loadingInitalData, offset, counter, opacity, translateY])

  useEffect(() => {
    loadPokemons();
  }, [api]);

  const ListFooterComponent = useMemo(
    () => (loading ? <ActivityIndicator size="small" color="#000" /> : <></>),
    [loading],
  );

  const refreshList = useCallback(async () => {
    setRefreshing(true);

    await loadPokemons(0, true);

    setRefreshing(false);
  }, [loadPokemons]);


  return (
    <Container>
      <PokemonListContainer
        contentContainerStyle={{ paddingBottom: 24, paddingHorizontal: 24 }}
        onEndReached={() => loadPokemons()}
        onEndReachedThreshold={0.1}
        onRefresh={refreshList}
        refreshing={refreshing}
        ListFooterComponent={ListFooterComponent}
        numColumns={2}
        ref={pokemonListRef}
        data={pokemons}
        keyExtractor={pokemon => String(pokemon.id)}
        renderItem={({ item, index }: { item: any, index }) =>
          <Summary
            pokemon={item}
            translateY={translateY}
            afterThirdCard={!!(index + 2)}
            rightCard={!!(index % 2)}
          />
        } />
    </Container>
  )
}

export default Pokemons;
