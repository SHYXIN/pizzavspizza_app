import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, Image } from 'react-native';
import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// import ListView from './src/screens/components/list_view.js';  // 用类方式
import ListView from './src/screens/components/function_list_view.js';

import DetailView from './src/screens/components/detail_view.js';
import AddPizzeria from './src/screens/drawer/addPizzeria.js';
import ScreenB from './src/screens/drawer/screenB.js';
import ScreenC from './src/screens/drawer/screenC.js';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabOne from './src/screens/tabs/tab1.js';
import TabTwo from './src/screens/tabs/tab2.js';
import LoginForm from './src/screens/drawer/loginForm.js';
import RegForm from './src/screens/drawer/regForm.js';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

renderTabComponents = ()=>(
  <Tab.Navigator>
    <Tab.Screen name="Tab 1" component={TabOne}/>
    <Tab.Screen name="Tab 2" component={TabTwo}/>
  </Tab.Navigator>
);


renderScreenComponents = () =>(
  <Stack.Navigator>
    <Stack.Screen name="Home" component={ListView}/>
    <Stack.Screen name="Detail" component={DetailView}/>
    <Stack.Screen name="Tabs" children={this.renderTabComponents}/>
  </Stack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" children={this.renderScreenComponents} />
        <Drawer.Screen name="Screen A" component={AddPizzeria}/>
        <Drawer.Screen name="Screen B" component={ScreenB}/>
        <Drawer.Screen name="Screen C" component={ScreenC}/>
        <Drawer.Screen name="Login" component={LoginForm}/>
        <Drawer.Screen name="Registration" component={RegForm}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
