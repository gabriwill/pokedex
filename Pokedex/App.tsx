/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import MainScreen from './src/screens/MainScreen/MainScreen';
import PokeProfileScreen from './src/screens/PokeProfileScreen/PokeProfileScreen';
import { RootStackParamList } from './src/screens/RootStackParamsList';

const { Navigator, Screen } = createSharedElementStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
        <Screen name='Home' component={MainScreen} />
        <Screen
          name='PokeProfile'
          component={PokeProfileScreen}
          sharedElements={(route, otherRoute, showing) => {
            const { pokemon } = route.params;
            return [`${pokemon.id}`]
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default App;
