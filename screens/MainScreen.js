import React from 'react';
import { Button, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

const HomeScreenA05 = ({ navigation }) => {
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

const SearchScreenA05 = () => {
  return (
    <View>
      <Text>SearchA05</Text>
    </View>
  );
};

const NotificationScreenA05 = () => {
  return (
    <View>
      <Text>NotificationA05</Text>
    </View>
  );
};

const MessageScreenA05 = () => {
  return (
    <View>
      <Text>MessageA05</Text>
    </View>
  );
};

const A05MainScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName={'HomeA05'}
      screenOptions={{
        tabBarActiveTintColor: '#fb8c00',
        tabBarShowLabel: true,
      }}>
      <Tab.Screen
        name={'HomeA05'}
        component={HomeScreenA05}
        options={{
          title: '홈',
          tabBarIcon: ({ color, size }) => (
            <Icon name={'home'} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={'SearchA05'}
        component={SearchScreenA05}
        options={{
          title: '검색',
          tabBarIcon: ({ color, size }) => (
            <Icon name={'search'} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={'NotificationA05'}
        component={NotificationScreenA05}
        options={{
          title: '알림',
          tabBarIcon: ({ color, size }) => (
            <Icon name={'notifications'} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={'MessageA05'}
        component={MessageScreenA05}
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

export default A05MainScreen;
