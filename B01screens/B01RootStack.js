import React from 'react';
import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import B01MainTab from './B01MainTab';
import B01WriteScreen from './B01WriteScreen';

const Stack = createNativeStackNavigator();

const B01RootStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'MainTab'}
        component={B01MainTab}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={'Write'}
        component={B01WriteScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  block: {},
});

export default B01RootStack;
