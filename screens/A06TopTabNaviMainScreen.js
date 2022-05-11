import React from 'react';
import {Button, Text, View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Tab = createMaterialTopTabNavigator();

const HomeScreenA06 = ({ navigation }) => {
  return (
    <View>
      <Text>Home</Text>
      <Button
        title={'디테일 1 열기'}
        onPress={() => navigation.push('Detail', { id: 1 })}
      />
    </View>
  );
};

const SearchScreenA06 = () => {
  return (
    <View>
      <Text>SearchA06</Text>
    </View>
  );
};

const NotificationScreenA06 = () => {
  return (
    <View>
      <Text>NotificationA06</Text>
    </View>
  );
};

const MessageScreenA06 = () => {
  return (
    <View>
      <Text>MessageA06</Text>
    </View>
  );
};

const A06MainScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName={'HomeA06'}
      screenOptions={{
        // tabBarActiveTintColor: '#fb8c00',
        // tabBarShowLabel: true,
        tabBarIndicatorStyle: {
          backgroundColor: '#009688',
        },
        tabBarActiveTintColor: '#009688',
      }}>
      <Tab.Screen
        name={'HomeA06'}
        component={HomeScreenA06}
        options={{
          tabBarLabel: '홈',
          tabBarIcon: ({ color, size }) => (
            <Icon name={'home'} color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name={'SearchA06'}
        component={SearchScreenA06}
        options={{
          tabBarLabel: '검색',
          tabBarIcon: ({ color, size }) => (
            <Icon name={'search'} color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name={'NotificationA06'}
        component={NotificationScreenA06}
        options={{
          tabBarLabel: '알림',
          tabBarIcon: ({ color, size }) => (
            <Icon name={'notifications'} color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name={'MessageA06'}
        component={MessageScreenA06}
        options={{
          tabBarLabel: '메시지',
          tabBarIcon: ({ color, size }) => (
            <Icon name={'message'} color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default A06MainScreen;
