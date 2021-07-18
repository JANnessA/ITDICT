import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Profile from '../screens/Main/Profile';
import EditProfile from '../screens/Main/EditProfile';
import YourWords from '../screens/Main/YourWords';
import Word from '../screens/Main/Word';

const Stack = createStackNavigator();

function StackProfile() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="YourWords" component={YourWords} />
      <Stack.Screen name="Word" component={Word} />
    </Stack.Navigator>
  );
}

export default StackProfile;
