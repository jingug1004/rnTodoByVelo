import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import B01FeedsScreen from './B01FeedsScreen';
import B01CalendarScreen from './B01CalendarScreen';
import B01SearchScreen from './B01SearchScreen';

const Tab = createBottomTabNavigator();

const B01MainTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#009688',
      }}>
      <Tab.Screen
        name={'Feeds'}
        component={B01FeedsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name={'view-stream'} size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={'Calendar'}
        component={B01CalendarScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name={'event'} size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={'Search'}
        component={B01SearchScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name={'search'} size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  block: {},
});

export default B01MainTab;
