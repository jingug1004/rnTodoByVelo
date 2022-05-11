import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Button, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

// enableScreens();
// const Drawer = createNativeDrawerNavigator();
const Drawer = createDrawerNavigator();

const HomeScreenA03 = ({ navigation }) => {
  return (
    <View>
      <Text>HomeA03</Text>
      <Button title={'Drawer 열기'} onPress={() => navigation.openDrawer()} />
      <Button
        title={'Settion 열기'}
        onPress={() => navigation.navigate('SettingA03')}
      />
    </View>
  );
};

const SettingScreenA03 = ({ navigation }) => {
  return (
    <View>
      <Text>SettingA03</Text>
      <Button title={'뒤로가기'} onPress={() => navigation.goBack()} />
    </View>
  );
};

const A03NaviDrawer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName={'HomeA03'}
        drawerPosition={'left'}
        backBehavior={'history'}
        screenOptions={{
          drawerActiveBackgroudColor: '#fb8c00',
          drawerActiveTintColor: 'red',
        }}
        // drawerContent={({ navigation }) => (
        //   <SafeAreaView>
        //     <Text>A Custom Drawer</Text>
        //     <Button
        //       onPress={() => navigation.closeDrawer()}
        //       title={'Drawer 닫기'}
        //     />
        //   </SafeAreaView>
        // )}
      >
        <Drawer.Screen
          name={'HomeA03'}
          component={HomeScreenA03}
          options={{
            title: '홈',
            // , headerLeft: () => <Text>Left</Text>
          }}
        />
        <Drawer.Screen
          name={'SettingA03'}
          component={SettingScreenA03}
          options={{ title: '설정' }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default A03NaviDrawer;
