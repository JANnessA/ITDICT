import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../screens/Authen/Login';
import midAuthen from '../screens/Authen/midAuthen';
import OnBoardingScreen from '../screens/Authen/OnBoardingScreen';
import Register from '../screens/Authen/Register';

const Stack = createStackNavigator();

function StackAuthen() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="OnBoardingScreen" component={OnBoardingScreen} />
      <Stack.Screen name="midAuthen" component={midAuthen} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
}

export default StackAuthen;
