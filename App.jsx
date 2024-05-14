import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StatusBar, View} from 'react-native';
import FlatListData from './apps/components/FlatList';
import Footer from './apps/components/Footer';
import Header from './apps/components/Header';
import ScrollViewData from './apps/components/ScrollView';
import SectionListData from './apps/components/SectionList';
import DarkAndlightMode from './apps/components/darkAndLightmode';
import dataPassInComponent from './apps/components/dataPassInComponent';
import Login from './apps/components/Login';
import Icons from './apps/components/Icons';
import IconName from 'react-native-vector-icons/Ionicons';

const App = () => {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <View style={{flex: 1}}>
        <Header />
        <Tab.Navigator
          initialRouteName="Icon"
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;
              if (route.name === 'FlatList') {
                iconName = focused ? 'list-sharp' : 'list-outline';
              } else if (route.name === 'SectionList') {
                iconName = focused
                  ? 'list-circle-outline'
                  : 'list-circle-sharp';
              } else if (route.name === 'Login') {
                iconName = focused ? 'log-in' : 'log-in-outline';
              } else if (route.name === 'DarkLight') {
                iconName = focused ? 'flashlight-sharp' : 'flashlight-outline';
              } else if (route.name === 'ScrollView') {
                iconName = focused
                  ? 'arrow-down-circle'
                  : 'arrow-down-circle-outline';
              } else if (route.name === 'DataPassComponent') {
                iconName = focused ? 'send-sharp' : 'send-outline';
              } else if (route.name === 'Icon') {
                iconName = focused ? 'menu-sharp' : 'menu-outline';
              }
              return <IconName name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
            headerShown: false,
          })}>
          <Tab.Screen name="FlatList" component={FlatListData} />
          <Tab.Screen name="SectionList" component={SectionListData} />
          <Tab.Screen name="Login" component={Login} />
          <Tab.Screen name="DarkLight" component={DarkAndlightMode} />
          <Tab.Screen name="ScrollView" component={ScrollViewData} />
          <Tab.Screen
            name="DataPassComponent"
            component={dataPassInComponent}
          />
          <Tab.Screen name="Icon" component={Icons} />
        </Tab.Navigator>
      </View>
      <Footer />
    </NavigationContainer>
  );
};

export default App;
