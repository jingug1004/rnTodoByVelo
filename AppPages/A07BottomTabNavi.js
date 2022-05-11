import React from 'react';
import {
  getFocusedRouteNameFromRoute,
  NavigationContainer,
} from '@react-navigation/native';
import A07BottomTabNaviMainScreen from '../screens/A07BottomTabNaviMainScreen';
import DetailScreen from '../screens/DetailScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const getHeaderTitle = route => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'HomeA07';
  const nameMap = {
    HomeA07: '홈',
    SearchA07: '검색',
    NotificationA07: '알림',
    MessageA07: '메시지',
  };
  return nameMap[routeName];
};

const A07BottomTabNavi = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={'Main'}
          component={A07BottomTabNaviMainScreen}
          options={({ route }) => ({
            title: getHeaderTitle(route),
          })}
        />
        <Stack.Screen name={'Detail'} component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default A07BottomTabNavi;
