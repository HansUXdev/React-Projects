import React, {useState,useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';


// Info
import {NetInfo, useNetInfo} from "@react-native-community/netinfo";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import 'react-native-gesture-handler';

// Import the screens
import {Home,Login} from './components/Home';
// import Main from './components/Main';
// import Chat from './components/Chat';


const Stack = createStackNavigator();

// // use the custom hook
// function CheckConnection(){
//   const netInfo = useNetInfo();
//   console.log(netInfo)
//   return (
//     <View>
//       <Text>Type: {netInfo.type}</Text>
//       <Text>Is Connected? {netInfo.isConnected.toString()}</Text>
//     </View>
//   );
// }


function ChatScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Chat Screen</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}


export default function App({ navigation }) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Chat" component={ChatScreen} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
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
