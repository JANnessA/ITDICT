import * as React from 'react';
// import {useState, useEffect, useReducer} from 'react';
import {AppState, View, ActivityIndicator, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import {RESTORE_TOKEN, SIGN_IN, SIGN_OUT} from './types';
import Config from './config';
import BottomTabNav from './src/navigations/BottomTabNav';
import StackAuthen from './src/navigations/StackAuthen';
export const AuthContext = React.createContext();

export default function App({navigation}) {
  // const [appState, setAppState] = useState(AppState.currentState);
  // //get state active-background of app
  // useEffect(() => {
  //   AppState.addEventListener('change', handleAppStateChange);
  //   return () => {
  //     AppState.removeEventListener('change', handleAppStateChange);
  //   };
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // const handleAppStateChange = nextAppState => {
  //   console.log('App State: ' + nextAppState);
  //   setAppState(nextAppState);
  // };

  const authReducer = (state, action) => {
    switch (action.type) {
      case RESTORE_TOKEN:
        return {
          ...state,
          userToken: action.token,
          isLoading: false,
        };
      case SIGN_IN:
        return {
          ...state,
          isSignout: false,
          userToken: action.token,
        };
      case SIGN_OUT:
        return {
          ...state,
          isSignout: true,
          userToken: null,
        };
      default:
        return {...state};
    }
  };

  const [state, dispatch] = React.useReducer(authReducer, {
    isLoading: true,
    isSingout: false,
    userToken: null,
  });

  React.useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken;
      try {
        const userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        console.log('Restoring user token failed');
      }
      dispatch({
        type: RESTORE_TOKEN,
        token: userToken,
      });
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async (email, password) => {
        axios
          .post(`${Config.URL_BASE}/auth/login`, {
            email: email, //'pink29215@gmail.com',
            password: password, //'123123', //
          })
          .then(res => {
            // console.log(res.data.token.accessToken);
            dispatch({
              type: SIGN_IN,
              token: res.data.token.accessToken,
            });
          })
          .catch(err => {
            //Alert.alert('Login failed.');
            console.log('login failed ' + err);
          });
      },
      signOut: async () => {
        try {
          await AsyncStorage.removeItem('userToken');
        } catch (e) {
          console.log('remove token failed');
        }
        dispatch({type: 'SIGN_OUT'});
      },
      signUp: async (username, email) => {
        // console.log('user', username);
        // console.log('mail', email);
        axios
          .post(`${Config.URL_BASE}/auth/register`, {
            name: username,
            email: email,
            phone: '',
            city: '',
          })
          .then(res => {
            Alert.alert(
              'Đăng kí thành công, mật khẩu sẽ được gửi đến email của bạn.',
            );
          })
          .catch(err => {
            Alert.alert('Đăng kí thất bại, hãy thử lại.');
          });
      },
    }),
    [],
  );

  if (state.isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  const Stack = createStackNavigator();

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          {state.userToken == null ? (
            <Stack.Screen name="SignIn" component={StackAuthen} />
          ) : (
            <Stack.Screen name="Home" component={BottomTabNav} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

// export default App;
