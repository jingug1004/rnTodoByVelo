import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

// enableScreens();
// const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const HomeScreenA04 = () => {
  return <Text>HomeA04</Text>;
};

const SearchScreenA04 = () => {
  return <Text>SearchA04</Text>;
};

const NotificationScreenA04 = () => {
  return <Text>NotificationA04</Text>;
};

const MessageScreenA04 = () => {
  return <Text>MessageA04</Text>;
};

const A04NaviTab = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={'HomeA04'}
        screenOptions={{
          tabBarActiveTintColor: '#fb8c00',
          tabBarShowLabel: true,
        }}>
        <Tab.Screen
          name={'HomeA04'}
          component={HomeScreenA04}
          options={{
            title: '홈',
            tabBarIcon: ({ color, size }) => (
              <Icon name={'home'} color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name={'SearchA04'}
          component={SearchScreenA04}
          options={{
            title: '검색',
            tabBarIcon: ({ color, size }) => (
              <Icon name={'search'} color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name={'NotificationA04'}
          component={NotificationScreenA04}
          options={{
            title: '알림',
            tabBarIcon: ({ color, size }) => (
              <Icon name={'notifications'} color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name={'MessageA04'}
          component={MessageScreenA04}
          options={{
            title: '메시지',
            tabBarIcon: ({ color, size }) => (
              <Icon name={'message'} color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default A04NaviTab;
