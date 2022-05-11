import React from 'react';
import {Button, Text, View} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Tab = createMaterialBottomTabNavigator();

const HomeScreenA07 = ({ navigation }) => {
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

const SearchScreenA07 = () => {
  return (
    <View>
      <Text>SearchA07</Text>
    </View>
  );
};

const NotificationScreenA07 = () => {
  return (
    <View>
      <Text>NotificationA07</Text>
    </View>
  );
};

const MessageScreenA07 = () => {
  return (
    <View>
      <Text>MessageA07</Text>
    </View>
  );
};

const A07MainScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName={'HomeA07'}
      screenOptions={{
        tabBarShowIcon: true,
      }}>
      <Tab.Screen
        name={'HomeA07'}
        component={HomeScreenA07}
        options={{
          tabBarLabel: '홈',
          tabBarIcon: ({ color, size }) => (
            <Icon name={'home'} color={color} size={24} />
          ),
          tabBarColor: 'black',
          tabBarBadge: 'new',
        }}
      />
      <Tab.Screen
        name={'SearchA07'}
        component={SearchScreenA07}
        options={{
          tabBarLabel: '검색',
          tabBarIcon: ({ color, size }) => (
            <Icon name={'search'} color={color} size={24} />
          ),
          tabBarColor: 'gray',
        }}
      />
      <Tab.Screen
        name={'NotificationA07'}
        component={NotificationScreenA07}
        options={{
          tabBarLabel: '알림',
          tabBarIcon: ({ color, size }) => (
            <Icon name={'notifications'} color={color} size={24} />
          ),
          tabBarColor: 'green',
          tabBarBadge: 30,
        }}
      />
      <Tab.Screen
        name={'MessageA07'}
        component={MessageScreenA07}
        options={{
          tabBarLabel: '메시지',
          tabBarIcon: ({ color, size }) => (
            <Icon name={'message'} color={color} size={24} />
          ),
          tabBarColor: 'blue',
          tabBarBadge: true,
        }}
      />
    </Tab.Navigator>
  );
};

export default A07MainScreen;
