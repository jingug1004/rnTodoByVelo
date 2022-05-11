import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import A06TopTabNaviMainScreen from '../screens/A06TopTabNaviMainScreen';
import DetailScreen from '../screens/DetailScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const A06TopTabNavi = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={'Main'} component={A06TopTabNaviMainScreen} />
        <Stack.Screen name={'Detail'} component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default A06TopTabNavi;
