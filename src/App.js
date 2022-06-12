import * as React from 'react';
import 'react-native-gesture-handler';
import {Monitoring1, Monitoring2} from './pages';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

const Drawer = createDrawerNavigator();
function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Monitoring1">
        <Drawer.Screen name="Monitoring1" component={Monitoring1} />
        <Drawer.Screen name="Monitoring2" component={Monitoring2} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
