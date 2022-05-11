import React from 'react';
import {
  getFocusedRouteNameFromRoute,
  NavigationContainer,
} from '@react-navigation/native';
import A09UseFocusEffectMainScreen from '../screens/A09UseFocusEffectMainScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import A08UserNaviRouteNaviDetailScreen from '../screens/A08UserNaviRouteNaviDetailScreen';

const Stack = createNativeStackNavigator();

const getHeaderTitle = route => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'HomeA09';
  const nameMap = {
    HomeA09: '홈',
    SearchA09: '검색',
    NotificationA09: '알림',
    MessageA09: '메시지',
  };
  return nameMap[routeName];
};

const A09UseFocusEffect = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={'Main'}
          component={A09UseFocusEffectMainScreen}
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

export default A09UseFocusEffect;
