/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import MainScreen from './src/screens/MainScreen/MainScreen';
import PokeProfileScreen from './src/screens/PokeProfileScreen/PokeProfileScreen';
import { IPokemonData } from './src/utils/Types';

const bulbasaur: IPokemonData = {
  id: 1,
  name: 'bulbasaur',
  image_url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
  types: [{type: 'grass'},{type: 'poison'}]
}

const App = () => {
  return (
    <>
      <PokeProfileScreen pokemon={bulbasaur} />
    </>
  );
};

export default App;
