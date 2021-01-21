import React, {useState,useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';


// Info
// import {NetInfo, useNetInfo} from "@react-native-community/netinfo";


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Import icons
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

// Import the screens
import {Home} from './components/Home';
import Chat from './components/Chat';


import {useNetInfo} from "@react-native-community/netinfo";

function CheckConnection(){
  const netInfo = useNetInfo();
  console.log(netInfo)
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Type: {netInfo.type}</Text>
      <Text>Is Connected? {netInfo.isConnected.toString()}</Text>


      <Text>Type: Bluetooth </Text>
      <Text>Is Connected? NA</Text>
    </View>
  );
}

// Chat button should be hidden until
export default function App({ navigation }) {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let iconColor;
            if (route.name === 'Settings') {
              iconName = focused ? 'chat' : 'chat';
              return <MaterialCommunityIcons name="bluetooth-transfer" size={24} color={color} />
            }
            if (route.name === 'Home') {
              iconColor = focused ? 'black' : 'grey';
                return <Entypo name="home" size={24} color={color} />
            } 
            if (route.name === 'Chat') {
              iconName = focused ? 'chat' : 'chat';
              return <Entypo name={iconName} size={24} color={color} />
            }

            // You can return any component that you like here!
            // return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'black',
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Chat" component={Chat}  options={{ tabBarBadge: 3 }}/>
        <Tab.Screen name="Settings" component={CheckConnection} />
        {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
      </Tab.Navigator>
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
