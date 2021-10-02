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
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import MainScreen from './src/screens/MainScreen/MainScreen';
import PokeProfileScreen from './src/screens/PokeProfileScreen/PokeProfileScreen';
import { RootStackParamList } from './src/screens/RootStackParamsList';

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='Home' component={MainScreen} />
        <Stack.Screen name='PokeProfile' component={PokeProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
