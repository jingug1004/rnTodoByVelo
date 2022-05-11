import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainScreen from '../screens/MainScreen';
import DetailScreen from '../screens/DetailScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const A05StackAndBottomTab = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={'Main'}
          component={MainScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name={'Detail'} component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default A05StackAndBottomTab;
