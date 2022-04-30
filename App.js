import React from 'react';
import { enableScreens } from 'react-native-screens';
import {
  findFocusedRoute,
  NavigationContainer,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import { View, Text, TouchableOpacity } from 'react-native';
import HeaderlessScreen from './screens/HeaderlessScreen';
import { SafeAreaView } from 'react-native-safe-area-context';

// enableScreens();
const Stack = createNativeStackNavigator();

const App = () => {
  // return <AppTodo />;
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'Home'}
        // screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          name={'Home'}
          component={HomeScreen}
          options={{
            title: '홈',
            // Header 블록에 대한 스타일
            headerStyle: {
              backgroundColor: '#29b6f6',
            },

            // Header의 텍스트, 버튼들 색상
            headerTintColor: '#ffffff',

            // 타이틀 텍스트의 스타일
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 20,
            },
          }}
        />
        <Stack.Screen
          name={'Detail'}
          component={DetailScreen}
          //* DetailScreen.js navigation.setOptions({ 와 동일.
          // options={({ route }) => ({
          //   title: `상세 정보 - ${route.params.id}`,
          // })}
          options={{
            headerBackVisible: false,
            headerLeft: ({ onPress }) => (
              <TouchableOpacity onPress={onPress}>
                <Text>Left</Text>
              </TouchableOpacity>
            ),
            headerTitle: ({ children }) => (
              <View>
                <Text>{children}</Text>
              </View>
            ),
            headerRight: () => (
              <View>
                <Text>Right</Text>
              </View>
            ),
          }}
        />
        <Stack.Screen
          name={'Headerless'}
          component={HeaderlessScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
