import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import {NavigationContainer} from '@react-navigation/native';

import StackHome from './StackHome';
import StackProfile from './StackProfile';
import StackTranslate from './StackTranslate';
import ReLearnWords from '../screens/Main/RelearnWords';

const Tab = createBottomTabNavigator();

export default function BottomTabNav() {
  return (
    <Tab.Navigator
      headerMode="none"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Translate sentence') {
            iconName = focused ? 'clipboard' : 'clipboard-outline';
          } else if (route.name === 'Relearn words') {
            iconName = focused ? 'book' : 'book-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={28} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'orange',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Home" component={StackHome} />
      <Tab.Screen name="Translate sentence" component={StackTranslate} />
      <Tab.Screen name="Relearn words" component={ReLearnWords} />
      <Tab.Screen name="Profile" component={StackProfile} />
    </Tab.Navigator>
  );
}
