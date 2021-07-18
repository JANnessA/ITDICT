import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Translate from '../screens/Main/Translate';

const Stack = createStackNavigator();

function StackTranslate() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Translate" component={Translate} />
    </Stack.Navigator>
  );
}

export default StackTranslate;
