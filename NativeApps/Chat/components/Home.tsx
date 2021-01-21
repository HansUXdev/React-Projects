import React from 'react';
import { Button, Text, View } from 'react-native';


export function Home( {navigation}) {
  // const [user] = useAuthState(auth);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Welcome to Home Screen</Text>
    </View>
  );
}