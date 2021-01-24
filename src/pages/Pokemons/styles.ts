import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { POKEMON_SUMMARY_HEIGHT } from "../../constants"


export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 5px;
`;


export const PokemonListContainer = styled(FlatList).attrs({
  showsHorizontalScrollIndicator: false,
  showsVerticalScrollIndicator: false
})`
  flex: 1;
`;
