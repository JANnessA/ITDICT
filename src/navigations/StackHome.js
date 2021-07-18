import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import MainScreen from '../screens/Main/Main';
import Word from '../screens/Main/Word';

const Stack = createStackNavigator();

function StackHome() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="MainScreen" component={MainScreen} />
      <Stack.Screen name="Word" component={Word} />
    </Stack.Navigator>
  );
}

export default StackHome;
