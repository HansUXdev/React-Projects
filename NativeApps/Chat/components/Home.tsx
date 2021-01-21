import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native';

import {useNetInfo} from "@react-native-community/netinfo";

import { useAuthState } from 'react-firebase-hooks/auth';
import {auth,SignIn, SignOut,ChatRoom} from "./Fire";

function CheckConnection(){
  const netInfo = useNetInfo();
  console.log(netInfo)
  return (
    <View>
      <Text>Type: {netInfo.type}</Text>
      <Text>Is Connected? {netInfo.isConnected.toString()}</Text>
    </View>
  );
}

export function Login( {navigation}) {
  const [user] = useAuthState(auth);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Logging on...</Text>
      {user ? <ChatRoom /> : <SignIn />}
    </View>
  );
}


export function Home( {navigation}) {
  const [user] = useAuthState(auth);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Welcome to Home Screen</Text>
      <Button
        title="Login"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
}
