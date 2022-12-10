import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

// import A01Todo from './AppPages/A01Todo';
// import A02NaviStack from './AppPages/A02NaviStack';
// import A03NaviDrawer from './AppPages/A03NaviDrawer';
// import A04NaviTab from './AppPages/A04NaviTab';
// import A05StackAndBottomTab from './AppPages/A05StackAndBottomTab';
// import A06TopTabNavi from './AppPages/A06TopTabNavi';
// import A07BottomTabNavi from './AppPages/A07BottomTabNavi';
// import A08UseNaviRouteNavi from './AppPages/A08UseNaviRouteNavi';
// import A09UseFocusEffect from './AppPages/A09UseFocusEffect';
// import B01DayLog from './AppPages/B01DayLog';
// ---------------------------------------------------------------------------
// import B01RootStack from './B01screens/B01RootStack';
// import { B01LogContextProvider } from './B01context/B01LogContext';
// import { B01SearchContextProvider } from './B01context/B01SearchContext';
// ---------------------------------------------------------------------------
// PublicGallery --------------------------------------------------------------------------- start
import PgRootStack from './PublicGallery/PgScreens/PgRootStack';
// PublicGallery --------------------------------------------------------------------------- end

const App = () => {
  // return <A01Todo />;
  // return <A02NaviStack />;
  // return <A03NaviDrawer />;
  // return <A04NaviTab />;
  // return <A05StackAndBottomTab />;
  // return <A06TopTabNavi />;
  // return <A07BottomTabNavi />;
  // return <A08UseNaviRouteNavi />;
  // return <A09UseFocusEffect />;
  // return <B01DayLog />;
  // ---------------------------------------------------------------------------
  // return (
  //   <NavigationContainer>
  //     <B01SearchContextProvider>
  //       <B01LogContextProvider>
  //         <B01RootStack />
  //       </B01LogContextProvider>
  //     </B01SearchContextProvider>
  //   </NavigationContainer>
  // );
  // ---------------------------------------------------------------------------
  // PublicGallery --------------------------------------------------------------------------- start
  return (
    <NavigationContainer>
      <PgRootStack></PgRootStack>
    </NavigationContainer>
  );
  // PublicGallery --------------------------------------------------------------------------- end
};

export default App;
