/* eslint-disable prettier/prettier */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './src/components/views/Login';
import ForgetScreen from './src/components/views/ForgetPassword';
import RegisterScreen from './src/components/views/Register';
import {Provider} from 'react-redux';
import store from './src/redux/store/index';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    // <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={LoginScreen}
          options={{title: 'Login'}}
        />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="ForgetPassword" component={ForgetScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    // </Provider>
  );
};
const NewApp = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
export default NewApp;
