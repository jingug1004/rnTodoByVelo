import React, { useCallback } from 'react';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { Button, Text, View } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Tab = createMaterialBottomTabNavigator();

const OpenDetailbutton = () => {
  const navigation = useNavigation();

  return (
    <Button
      title={'디테일 1 열기'}
      onPress={() => navigation.push('Detail', { id: 1 })}
    />
  );
};

const HomeScreenA09 = ({ navigation }) => {
  useFocusEffect(
    useCallback(() => {
      console.log('l~ mounted');
      return () => {
        console.log('l~ unmounted');
      };
    }, []),
  );

  return (
    <View>
      <Text>Home</Text>
      <OpenDetailbutton />
    </View>
  );
};

const SearchScreenA09 = () => {
  return (
    <View>
      <Text>SearchA09</Text>
    </View>
  );
};

const NotificationScreenA09 = () => {
  return (
    <View>
      <Text>NotificationA09</Text>
    </View>
  );
};

const MessageScreenA09 = () => {
  return (
    <View>
      <Text>MessageA09</Text>
    </View>
  );
};

const A09MainScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName={'HomeA09'}
      screenOptions={{
        tabBarActiveTintColor: '#fb8c00',
        tabBarShowLabel: true,
      }}>
      <Tab.Screen
        name={'HomeA09'}
        component={HomeScreenA09}
        options={{
          title: '홈',
          tabBarIcon: ({ color, size }) => (
            <Icon name={'home'} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={'SearchA09'}
        component={SearchScreenA09}
        options={{
          title: '검색',
          tabBarIcon: ({ color, size }) => (
            <Icon name={'search'} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={'NotificationA09'}
        component={NotificationScreenA09}
        options={{
          title: '알림',
          tabBarIcon: ({ color, size }) => (
            <Icon name={'notifications'} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={'MessageA09'}
        component={MessageScreenA09}
        options={{
          title: '메시지',
          tabBarIcon: ({ color, size }) => (
            <Icon name={'message'} color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default A09MainScreen;
