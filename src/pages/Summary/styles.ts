import styled from 'styled-components/native';
import { Animated, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { POKEMON_TYPE_COLORS } from '../../constants'



export const Container = styled.View`
  width: 49%;
  margin: 2px;
`;

interface IButton {
  type_pokemon: string;
}
export const Button = styled(RectButton) <IButton>`
  width: 100%;
  background:  ${p => POKEMON_TYPE_COLORS[p.type_pokemon.toLowerCase()]};
  padding: 10px;
  border-radius: 12px;
  flex-direction: row;
  align-items:center;
  justify-content: space-between;

`;

export const Info = styled.View`
  flex: 1;
`;

export const Name = styled.Text.attrs({
  textOverflow: "ellipsis",
  overflow: "hidden",
  whiteSpace: "nowrap",
})`
  flex: 1;
  font-size: 13.5px;
  font-weight: bold;
  color: #FFF;
`;

export const Types = styled.View`
  flex: 1;
`;


export const Type = styled.View`
  background: rgba(255, 255,255, 0.4);
  border-radius: 12px;
  margin: 0 0 5px;
`;

export const TypeText = styled.Text`
  color: #FFF;
  text-align: center;
`;


export const InfoImage = styled.View`

`;

export const NumberResgister = styled.Text`
  text-align: right;
  color: #FFF;
  font-size: 16px;
`;

export const PokemonImageContainer = styled(Animated.View)`
`;

export const PokemonImage = styled(Image)`
  width: 94px;
  height: 94px;
`;

