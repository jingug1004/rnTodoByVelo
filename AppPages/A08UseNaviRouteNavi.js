import React from 'react';
import {
  getFocusedRouteNameFromRoute,
  NavigationContainer,
} from '@react-navigation/native';
import A08UseNaviRouteNaviMainScreen from '../screens/A08UseNaviRouteNaviMainScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import A08UserNaviRouteNaviDetailScreen from '../screens/A08UserNaviRouteNaviDetailScreen';

const Stack = createNativeStackNavigator();

const getHeaderTitle = route => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'HomeA08';
  const nameMap = {
    HomeA08: '홈',
    SearchA08: '검색',
    NotificationA08: '알림',
    MessageA08: '메시지',
  };
  return nameMap[routeName];
};

const A08BottomTabNavi = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={'Main'}
          component={A08UseNaviRouteNaviMainScreen}
          options={({ route }) => ({
            title: getHeaderTitle(route),
          })}
        />
        <Stack.Screen
          name={'Detail'}
          component={A08UserNaviRouteNaviDetailScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default A08BottomTabNavi;
