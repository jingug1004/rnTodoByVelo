import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Button, Text, View} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Tab = createMaterialBottomTabNavigator();

const OpenDetailButton = () => {
  const navigation = useNavigation();

  return (
    <Button
      title={'디테일 1 열기'}
      onPress={() => navigation.push('Detail', { id: 1 })}
    />
  );
};

const HomeScreenA08 = ({ navigation }) => {
  return (
    <View>
      <Text>Home</Text>
      <OpenDetailButton />
    </View>
  );
};

const SearchScreenA08 = () => {
  return (
    <View>
      <Text>SearchA08</Text>
    </View>
  );
};

const NotificationScreenA08 = () => {
  return (
    <View>
      <Text>NotificationA08</Text>
    </View>
  );
};

const MessageScreenA08 = () => {
  return (
    <View>
      <Text>MessageA08</Text>
    </View>
  );
};

const A08MainScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName={'HomeA08'}
      screenOptions={{
        tabBarShowIcon: true,
      }}>
      <Tab.Screen
        name={'HomeA08'}
        component={HomeScreenA08}
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
        name={'SearchA08'}
        component={SearchScreenA08}
        options={{
          tabBarLabel: '검색',
          tabBarIcon: ({ color, size }) => (
            <Icon name={'search'} color={color} size={24} />
          ),
          tabBarColor: 'gray',
        }}
      />
      <Tab.Screen
        name={'NotificationA08'}
        component={NotificationScreenA08}
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
        name={'MessageA08'}
        component={MessageScreenA08}
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

export default A08MainScreen;
