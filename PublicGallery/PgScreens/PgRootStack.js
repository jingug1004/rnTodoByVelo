import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../screens/HomeScreen';
import DetailScreen from '../../screens/DetailScreen';
import PgSignInScreen from './PgSignInScreen';

// enableScreens();
const Stack = createNativeStackNavigator();

const PgRootStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'SignIn'}
        component={PgSignInScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default PgRootStack;
