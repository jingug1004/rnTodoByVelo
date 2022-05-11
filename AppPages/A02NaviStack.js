import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';

// enableScreens();
const Stack = createNativeStackNavigator();

const A02NaviStack = () => {
  // return <AppTodo />;
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Home02'}>
        <Stack.Screen name={'Home02'} component={HomeScreen} />
        <Stack.Screen name={'Detail'} component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default A02NaviStack;
